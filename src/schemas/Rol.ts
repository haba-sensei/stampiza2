import mongoose from 'mongoose';

const { Schema } = mongoose;

const rolSchema = new Schema({
  nombre: { type: String, required: true, enum: ['admin', 'cliente', 'colaborador'] }
});
const Rol = mongoose.model('Rol', rolSchema);


export default Rol;
