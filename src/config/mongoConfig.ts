import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGOURI ? process.env.MONGOURI : 'mongodb://localhost:27017/stampiza2_tshirt';
        await mongoose.connect(mongoURI);
        console.log("Conexión exitosa a MongoDB:::", mongoURI);
        return true;
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        return false;
    }
};
