import mongoose from 'mongoose';

const { Schema } = mongoose;

const productoSchema = new Schema({
  talla: { type: String, required: true },
  color: { type: String, required: true },
  cantidad: { type: Number, required: true },
});
const Producto = mongoose.model('Producto', productoSchema);


export default Producto;
