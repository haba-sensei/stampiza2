import mongoose from 'mongoose';

const { Schema } = mongoose;

const subCategoriaSchema = new Schema({
  nombre: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
});
const SubCategoria = mongoose.model('SubCategoria', subCategoriaSchema);


export default SubCategoria;
