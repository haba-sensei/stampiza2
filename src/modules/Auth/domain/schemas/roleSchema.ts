import { Schema } from 'mongoose';
import { IRole } from '@auth/domain/interfaces/IUser';

export const roleSchema = new Schema<IRole>({
    typeRole: { type: String, required: true },
    role: { type: String, required: true },
});