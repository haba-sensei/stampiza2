// import bcrypt from 'bcrypt';
import { UserModel } from "@auth/domain/models/userModel";
import { JwtService } from '@auth/infrastructure/JwtService';


export const loginAdapter = async (body: any): Promise<any> => {
    // Generar el token de la tarjeta   
    // const token = generateToken();

    // const { cardNumber, cvv, expirationMonth, expirationYear, email } = body;
    const email = "asdsad@gmail.com";
    const password = "12345";
    // const passHash = bcrypt.hash(password, 10);

    // if (!user || !bcrypt.compareSync(password, user.password)) {
    //     throw new Error('Invalid credentials');
    // }
    // const hashToken = await bcrypt.hash(`${email}-${passHash}`, 10);
    // const token = JwtService.generateToken(hashToken);
    // console.log(token);
    // // Almacenar los datos en MongoDB
    // const create = await UserModel.create({ email, passHash, createdAt: new Date() });
    // console.log(create);
    const result = { message: "llege a logear" };

    return result;
}