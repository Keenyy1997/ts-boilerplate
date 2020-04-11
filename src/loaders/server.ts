import express, { Express } from 'express';
import { loadDependencies } from './dependencies';
import { loadRoutes } from './routes';


/**
 * @author Kenny Vallejo
 * @description Express server initializer
 * @param {Number} port Server Port
 * @function Start Initialize the server loading the dependencies and the routes
 */
class Server {
  public app: Express;
  private port: number;

  /**
   * @description The constructor will only receive the port number where the server is going to start listening requests
   * @param port {Number} Port Number
   */
  public constructor(port: number) {
    // Server Port
    this.port = port;
    // Express Server
    this.app = express();
  }

  /**
   * @description Starts the server loading the dependencies and the routes, finally the server will be listening the port received in the constructor
   */
  public start(): Express {

    // We load the dependencies and uses
    loadDependencies(this.app);

    // We start to load the routes
    loadRoutes(this.app);

    // After all, we start the server

    this.app.listen(this.port, () => {
      console.log(
        `Express App Listening at: ${process.env.BASE_URL || "http://localhost:"}${this.port}`
      )
    })

    return this.app;
  }

}

export default Server;