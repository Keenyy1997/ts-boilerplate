import { ApolloServer } from 'apollo-server';
import { loadSchemas } from './../schemas';
import { loadResolvers } from './../resolvers';

/**
 * @author Kenny Vallejo
 * @description GraphQL (Apollo) Server
 * @param {Number} port GraphQL Expose Port
 * @function Start Initialize the server loading the Schemas And Resolvers
 */
class GraphQL {
  public server: ApolloServer | undefined;
  private port: number;


  /**
   * @param port Expose Port
   * @description The constructor will receive the var port {number} to start listening the server
   */
  public constructor(port: number) {

    // GraphQL Expose Port
    this.port = port;
  }

  /**
   * @description Starts the Apollo GraphQL Server
   * @returns ApolloServer
   */
  public start(): ApolloServer {

    const server: ApolloServer = new ApolloServer({
      typeDefs: loadSchemas(),
      resolvers: loadResolvers(),
      playground: process.env.NODE_ENV === 'PROD' ? false : true,
      introspection: process.env.NODE_ENV === 'PROD' ? false : true,
      plugins: [
        { 
          /**
           * 
           * @param requestContext Receives the parameter request from the graphql
           * @returns a console log with the query submitted by a user and also a timestamp in UTC
           */
          requestDidStart(requestContext): void {

            if (requestContext.request.query?.includes('IntrospectionQuery') === false) {
              console.log(
                `Request at ${new Date().toISOString()}: ${requestContext.request.query}`, 
              )
            }
          }
        }
      ]
    });

    /* WE ASSIGN THE PORT FOR THE GRAPHQL SERVER */
    server.listen({
      port: this.port
    });

    this.server = server;

    console.log(
      `GraphQL Server Listening on: ${process.env.BASE_URL || `http://localhost:` + this.port + this.server.graphqlPath}`
    );

    return this.server;
  }
}

export default GraphQL;