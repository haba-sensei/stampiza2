import { IRole } from "@auth/domain/interfaces/IUser";

export const roleAdapter = async (email: string): Promise<IRole | any> => {
    // Generar el token de la tarjeta   
    // const token = generateToken();

    // const { cardNumber, cvv, expirationMonth, expirationYear, email } = body;

    // // Almacenar los datos en MongoDB
    // await Card.create({ token, commerceToken, cardNumber, cvv, expirationMonth, expirationYear, email, createdAt: new Date() });

    const result = {
        message: "llege role", role: {
            id: "1",
            role: "admin"
        }
    };

    return result;
}