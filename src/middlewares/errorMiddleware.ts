import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ error: error.message });
};