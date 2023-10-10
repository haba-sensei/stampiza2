import { model } from 'mongoose';
import { IUser } from '@auth/domain/interfaces/IUser';
import { userSchema } from '@auth/domain/schemas/userSchema';

export const UserModel = model<IUser>('users', userSchema);