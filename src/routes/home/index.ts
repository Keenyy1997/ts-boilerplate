import { Router } from 'express';
import { SayHello } from './../../controllers/home';

/**
 * @description Have all the routes in the path `/home/*`
 */
const AppRouter: Router = Router();

/**
 * @author Kenny Vallejo
 * @description Just a simple get http request to greet the user
 */
AppRouter.get('/', SayHello);


export default AppRouter;