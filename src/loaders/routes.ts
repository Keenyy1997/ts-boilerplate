import { Express } from 'express';
import Routes from './../routes';

export function loadRoutes(app: Express): null {
  /* Use the masterRouter in the application */
  app.use(Routes);

  return null;
}