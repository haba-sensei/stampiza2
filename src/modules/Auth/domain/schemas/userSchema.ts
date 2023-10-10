import { Schema } from 'mongoose';
import { IUser } from '@auth/domain/interfaces/IUser';

export const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.Array, required: true },
    createdAt: { type: Date, default: Date.now }
});