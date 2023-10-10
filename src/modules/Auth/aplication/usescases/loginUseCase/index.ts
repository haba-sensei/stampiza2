import { IUser } from "@auth/domain/interfaces/IUser";
import { userRepositoryAdapter } from "@auth/aplication/adapters";


export const loginUseCase = async (user: IUser): Promise<any> => {
    const userExist = await userRepositoryAdapter.findUser(user);
    if (userExist) {
        // console.log("llege", userExist);
    }
    return userExist;
};