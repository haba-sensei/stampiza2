import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { error, messageError } from '@shared/global/messages';
import { emailChain, passwordChain } from '../validations/chains';
import { CustomResponse } from '@shared/interfaces/ICustomResponse';
import { customResponse } from '@shared/utils';


export const loginMiddleware = [
    emailChain,
    passwordChain,
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const responseData: CustomResponse = {
                status: error,
                message: `${messageError} loginMiddleware`,
                error: errors.array()[0].msg
            };
            customResponse(res, responseData);
            return;
        }
        next();
    },
]; 