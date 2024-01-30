import { Router } from 'express';
import categoriaRouter from './routes/categoria.routes';
import imagenRouter from './routes/imagen.routes';
import subCategoriaRouter from './routes/subcategoria.routes';
import tagRouter from './routes/tag.routes';
import usuarioRouter from './routes/usuario.routes';

const routes = Router();

routes.use('/api/v1/categorias', categoriaRouter);
routes.use('/api/v1/imagenes', imagenRouter);
routes.use('/api/v1/subcategorias', subCategoriaRouter);
routes.use('/api/v1/tags', tagRouter);
routes.use('/api/v1/usuarios', usuarioRouter);

export default routes;
