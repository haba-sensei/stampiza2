import { Request, Response, NextFunction } from 'express';

export const authorizeRoles = (...allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.body.user || !allowedRoles.includes(req.body.user.rol)) {
            return res.status(403).send("Access denied");
        }
        next();
    };
};
