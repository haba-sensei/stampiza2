import { User } from "src/modules/Auth/domain/interfaces/IUser";
import { userRepositoryAdapter } from "../../adapters";


export const findRoleUseCase = async ({ email }: User): Promise<any> => {
    return userRepositoryAdapter.findRole(email);
};