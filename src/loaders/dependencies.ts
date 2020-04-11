import { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

/**
 * @description Function to load all the dependencies into the express app
 * @param app {Express} Express Server Application
 */
export function loadDependencies(app: Express): null {

  // BodyParserJson
  app.use(bodyParser.json());

  // BodyParserUrlEncoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // CORS
  app.use(cors());

  // Morgan
  app.use(morgan('dev'));

  return null;
}