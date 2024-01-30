import mongoose, { Document, PaginateModel } from 'mongoose';

interface ImagenDocument extends Document {
    nombre: string;
    tags: mongoose.Types.ObjectId[];
    categoria: mongoose.Types.ObjectId;
    subCategoria: mongoose.Types.ObjectId;
    url: string;
}

interface ImagenModel extends PaginateModel<ImagenDocument> { }


export { ImagenDocument, ImagenModel }