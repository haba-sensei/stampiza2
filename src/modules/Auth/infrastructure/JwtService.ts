import jwt from 'jsonwebtoken';

export class JwtService {
    private static readonly SECRET_KEY = 'your-secret-key';

    static generateToken(userId: string): string {
        return jwt.sign({ userId }, this.SECRET_KEY, { expiresIn: '1h' });
    }

    static verifyToken(token: string): { userId: string } {
        return jwt.verify(token, this.SECRET_KEY) as { userId: string };
    }
}
