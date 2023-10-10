// import bcrypt from 'bcrypt';
import { UserModel } from "@auth/domain/models/userModel";
import { roleNotFound, userInvalidPass, userNotFound } from "@auth/adapters/constants";
import { IRole, IUser } from "@auth/domain/interfaces/IUser";

// Validar el formato del email y los dominios permitidos
export const validateEmail = (email: string): boolean => {
    const validDomains = ['gmail.com', 'hotmail.com', 'yahoo.es'];
    const sanitizedEmail = email.trim().toLowerCase();

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(sanitizedEmail)) {
        return false;
    }

    const domain = sanitizedEmail.substring(sanitizedEmail.lastIndexOf('@') + 1);

    return validDomains.includes(domain);
}

export const validatePassword = (password: string): boolean => {
    // - ejemplo 12345678@Login
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);
}

export const comparePasswords = async (passwordUser: string, filterPasswordUser: string): Promise<boolean> => {
    // const bcryptHash = await Bun.password.hash(password, {
    //     algorithm: "bcrypt",
    //     cost: 4, // number between 4-31
    // });
    const isPasswordValid = await Bun.password.verify(passwordUser, filterPasswordUser);
    // await bcrypt.compare(passwordUser, filterPasswordUser);
    if (!isPasswordValid) {
        throw new Error(userInvalidPass);
    }
    return isPasswordValid;
}

export const existUser = async (user: IUser): Promise<IUser> => {
    if (!user) {
        throw new Error(userNotFound);
    }
    return user;
}

export const existRole = async (role: IRole): Promise<IRole> => {
    if (!role) {
        throw new Error(roleNotFound);
    }
    const formatRole: IRole = {
        typeRole: role.typeRole,
        role: role.role
    }

    return formatRole;
}

export const validateTokenInMongoDB = async (token: string): Promise<boolean> => {
    try {
        const userToken = await UserModel.findOne({ token }).exec();

        if (!userToken) {
            return false;
        }
        // Verificar si el token ha expirado
        const expirationTime = 15 * 60 * 1000; // 15 minutos en milisegundos
        // const expirationTime = 30 * 1000; // 30 segundos en milisegundos
        const currentTime = new Date().getTime();
        const tokenCreatedAt = userToken.createdAt ? userToken.createdAt.getTime() : 0;
        const elapsedTime = currentTime - tokenCreatedAt;

        if (elapsedTime > expirationTime) {
            throw new Error('El token ha expirado.'); // Lanzar una excepción si el token ha expirado
        }

        return true;
    } catch (error) {
        throw new Error('Error al validar el token en MongoDB.');
    }
};

export const validateToken = async (token: string): Promise<boolean> => {
    try {
        const isValidMongoDB = await validateTokenInMongoDB(token);

        if (!isValidMongoDB) {
            return false;
        }

        return true;
    } catch (error) {
        return false;
    }
};

