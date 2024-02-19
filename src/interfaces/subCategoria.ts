import mongoose, { Document, PaginateModel } from 'mongoose';

interface SubCategoriaDocument extends Document {
    nombre: string;
    categoria: mongoose.Types.ObjectId;
    imagen: string;
}

interface SubCategoriaModel extends PaginateModel<SubCategoriaDocument> { }


export { SubCategoriaDocument, SubCategoriaModel }