import mongoose from 'mongoose';

const { Schema } = mongoose;

const pedidoSchema = new Schema({
  numPedido: { type: String, required: true },
  estado: { type: String, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
  montoBase: { type: Number, required: true },
  montoIgv: { type: Number, required: true },
  montoDelivery: { type: Number, required: true },
  montoTotal: { type: Number, required: true },
  productos: [{ type: Schema.Types.ObjectId, ref: 'ProductoTransaction' }],
});
const Pedido = mongoose.model('Pedido', pedidoSchema);


export default Pedido;
