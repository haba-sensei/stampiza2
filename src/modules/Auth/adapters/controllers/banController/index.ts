import { NextFunction, Request, Response } from 'express';

export class BanController {
    static async banClient(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::BanController Client' })
    }
    static async banWorker(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({ message: 'Success ::BanController Worker' })
    }
}
