import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

const imagenSchema = new Schema({
  nombre: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
  subCategoria: { type: Schema.Types.ObjectId, ref: 'SubCategoria', required: true },
  url: { type: String, required: true }
});

imagenSchema.plugin(mongoosePaginate);
const Imagen = mongoose.model('Imagen', imagenSchema);

export default Imagen;
