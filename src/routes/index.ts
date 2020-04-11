import { Router } from 'express';
import Home from './home';

/**
 * @description Includes the routes in the path `/*`
 */
const masterRouter: Router = Router();

/**
 * @description Home routes
 */
masterRouter.use('/home', Home);

export default masterRouter;