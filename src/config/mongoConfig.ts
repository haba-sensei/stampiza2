import mongoose from 'mongoose';
import { $log } from 'ts-log-debug';

export const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGOURI ? process.env.MONGOURI : 'mongodb://localhost:27017/stampiza2_tshirt';
        await mongoose.connect(mongoURI);
        $log.info("Conexión exitosa a MongoDB");
        return true;
    } catch (error) {
        $log.error('Error al conectar a MongoDB:', error);
        return false;
    }
};
