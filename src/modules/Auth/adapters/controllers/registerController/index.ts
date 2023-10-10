import { NextFunction, Request, Response } from 'express';

export class RegisterController {
    static async registerClient(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::RegisterController Client' })
    }
    static async registerWorker(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::RegisterController Worker' })
    }
}
