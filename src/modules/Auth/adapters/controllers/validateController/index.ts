import { NextFunction, Request, Response } from 'express';

export class ValidateController {
    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::ValidateController JWT' })
    }
    static async validateAuthToken(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::ValidateController AuthToken' })
    }
}
