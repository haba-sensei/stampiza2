import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
    try {
        const mongoURI = `${process.env.MONGOURI}${process.env.BD}`;
        await mongoose.connect(mongoURI);
        console.log("Conexión exitosa a MongoDB");
        return true;
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        return false;
    }
};
