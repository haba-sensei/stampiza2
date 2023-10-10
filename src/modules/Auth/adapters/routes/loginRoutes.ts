import express from 'express';
import { LoginController } from '@auth/adapters/controllers';
import { loginMiddleware } from '@auth/adapters/middlewares/loginMiddleware';

const loginRouter = express.Router();

loginRouter.post('/', loginMiddleware, LoginController.login);

export default loginRouter;