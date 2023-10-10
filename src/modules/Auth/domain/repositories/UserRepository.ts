import { IRole, IUser } from '@auth/domain/interfaces/IUser';

export interface UserRepository {
    findUser(user: IUser): Promise<IUser>;
    loginUser(user: IUser): Promise<IUser>;
    findRole(email: string): Promise<IRole | null>;
}
