import { User } from "src/modules/Auth/domain/interfaces/IUser";
import { userRepositoryAdapter } from "../../adapters";


export const findUserUseCase = async ({ email }: User): Promise<any> => {
    return userRepositoryAdapter.findUser(email);
};