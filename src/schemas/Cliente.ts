import mongoose from 'mongoose';

const { Schema } = mongoose;

const clienteSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  coordenadas: { type: String, required: true },
});
const Cliente = mongoose.model('Cliente', clienteSchema);


export default Cliente;
