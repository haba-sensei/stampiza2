import mongoose from 'mongoose';

const { Schema } = mongoose;

const productoTransactionSchema = new Schema({
  pedido: { type: Schema.Types.ObjectId, ref: 'Pedido' },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
  imagen: { type: Schema.Types.ObjectId, ref: 'Imagen' },
});
const ProductoTransaction = mongoose.model('ProductoTransaction', productoTransactionSchema);


export default ProductoTransaction;
