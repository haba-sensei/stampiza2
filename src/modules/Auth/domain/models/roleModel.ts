import { model } from 'mongoose';
import { IRole } from '@auth/domain/interfaces/IUser';
import { roleSchema } from '@auth/domain/schemas/roleSchema';

export const RoleModel = model<IRole>('role', roleSchema);