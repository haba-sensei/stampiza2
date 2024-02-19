import { SubCategoriaDocument, SubCategoriaModel } from 'interfaces/subCategoria';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

const subCategoriaSchema = new Schema({
  nombre: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
  imagen: { type: String, required: true }
});

subCategoriaSchema.plugin(mongoosePaginate);

const SubCategoria = mongoose.model<SubCategoriaDocument, SubCategoriaModel>('SubCategoria', subCategoriaSchema); 

export default SubCategoria;
