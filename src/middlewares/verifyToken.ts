import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const JWT_SECRET = process.env.JWT_SECRET ?? '1b77c1c7306f582c95835d276ecc16effe4929924ac9aad85fa76e69f95aeb39';
        const decoded = jwt.verify(token, JWT_SECRET);
        req.body.user = decoded;
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).send("Token has expired");
        } else {
            return res.status(401).send("Invalid Token");
        }
    }
};
