import mongoose from 'mongoose';

// export const mongoURI = 'mongodb://localhost:27017/stampiza2_tshirt';
export const mongoURI = 'mongodb+srv://haba:%402582Jack@cluster0.e8hmy59.mongodb.net';

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conexión exitosa a MongoDB");
        return true;
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        return false;
    }
};
