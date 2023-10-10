import { NextFunction, Request, Response } from 'express';

export class ForgotController {
    static async forgotPass(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::ForgotController Password' })
    }
    static async forgotEmail(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::ForgotController Email' })
    }
}
