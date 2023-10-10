import { IUser } from "@auth/domain/interfaces/IUser";
import { UserRepository } from "@auth/domain/repositories/UserRepository";
import { findUserAdapter } from "./findUserAdapter";
import { loginAdapter } from "./loginAdapter";
import { roleAdapter } from "./roleAdapter";


export const userRepositoryAdapter: UserRepository = {
    findUser: async (user: IUser) => findUserAdapter(user),
    loginUser: async (user: IUser) => loginAdapter(user),
    findRole: async (email: string) => roleAdapter(email),
};