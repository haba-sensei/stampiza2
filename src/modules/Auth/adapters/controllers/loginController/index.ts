import { NextFunction, Request, Response } from 'express';
import { loginUseCase } from '@auth/aplication/usescases/loginUseCase';
import { IUser } from '@auth/domain/interfaces/IUser';
import { customResponse } from '@shared/utils';
import { CustomResponse } from '@shared/interfaces/ICustomResponse';
import { error, messageError, messageSuccess, success } from '@shared/global/messages';

export class LoginController {
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const userValue: IUser = req.body;

            const user = await loginUseCase(userValue);

            const responseData: CustomResponse = {
                status: success,
                message: `${messageSuccess} Login`,
                data: {
                    user: {
                        email: user.email,
                        token: "asdasda",
                        role: user.role
                    }
                }
            };

            customResponse(res, responseData);
        } catch (e: any) {
            const responseData: CustomResponse = {
                status: error,
                message: `${messageError} Login`,
                error: e.message
            };

            customResponse(res, responseData);
        }

    }
}
