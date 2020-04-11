import { importSchema } from 'graphql-import';

/**
 * @description This function allow us to fetch all the schemas in our `/schemas` folder
 */
export function loadSchemas(): string {

  const schemas: string = importSchema(`${__dirname}/schema.graphql`)

  return schemas;
}