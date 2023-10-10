import { UserModel } from "@auth/domain/models/userModel";
import { IRole, IUser } from '@auth/domain/interfaces/IUser';
import { RoleModel } from '@auth/domain/models/roleModel';
import { comparePasswords, existRole, existUser } from '@auth/adapters/validations';

export const findUserAdapter = async (user: IUser): Promise<any> => {
    const email = user.email;
    const findUser = await UserModel.findOne({ email });

    const userConfirm = await existUser(findUser as IUser);
    await comparePasswords(user.password, userConfirm.password);
    console.log(userConfirm.role);
    const roleId = userConfirm.role;
    const role = await RoleModel.findOne({ typeRole: roleId });

    const userRoleConfirm = await existRole(role as IRole);
    userConfirm.role = userRoleConfirm;

    return userConfirm;
}