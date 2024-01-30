import mongoose from 'mongoose';

const { Schema } = mongoose;

const usuarioSchema = new Schema({
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  rol: { type: Schema.Types.ObjectId, ref: 'Rol' }
});
const Usuario = mongoose.model('Usuario', usuarioSchema);


export default Usuario;
