// import { UserRepository } from '../domain/repositories/UserRepository';
// import { JwtService } from '../infrastructure/JwtService';
// import bcrypt from 'bcrypt';

// export class AuthService {
//     static async login(email: string, password: string): Promise<string> {
//         const user = await UserRepository.findByEmail(email);

//         if (!user || !bcrypt.compareSync(password, user.password)) {
//             throw new Error('Invalid credentials');
//         }

//         const token = JwtService.generateToken(user.id);
//         return token;
//     }
// }
