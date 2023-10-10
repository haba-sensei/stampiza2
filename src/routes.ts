import { Router } from 'express';
import loginRouter from '@auth/adapters/routes/loginRoutes';

const routes = Router();

routes.use('/api/v1/login', loginRouter);

export default routes;
