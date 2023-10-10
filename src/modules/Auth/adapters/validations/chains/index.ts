import { body, param } from 'express-validator';
import * as error from '@auth/adapters/errors';
import { validatePassword, validateEmail, validateToken } from '@auth/adapters/validations';

export const tokenChain =
    param('token')
        .exists()
        .withMessage(error.TokenNotExist)
        .custom(async (token) => {
            const isValidToken = await validateToken(token);
            if (!isValidToken) {
                throw new Error(error.TokenExpireInvalid);
            }
            return true;
        });


export const emailChain = body('email')
    .exists()
    .withMessage(error.EmailRequired)
    .isEmail()
    .withMessage(error.EmailInvalid)
    .custom((value) => {
        if (!validateEmail(value)) {
            throw new Error(error.EmailInvalidDomain);
        }
        return true;
    });

export const passwordChain = body('password')
    .exists()
    .withMessage(error.PasswordRequired)
    .custom((value) => {
        if (!validatePassword(value)) {
            throw new Error(error.PasswordInvalid);
        }
        return true;
    });