import { Router } from 'express';
import categoriaRouter from './routes/categoria.routes';
import imagenRouter from './routes/imagen.routes';
import subCategoriaRouter from './routes/subcategoria.routes';
import tagRouter from './routes/tag.routes';
import usuarioRouter from './routes/usuario.routes';
import clientesRouter from './routes/cliente.routes';
import rolesRouter from './routes/rol.routes';
import pedidoRouter from './routes/pedido.routes';
import productoRouter from './routes/producto.routes';
import productoTransactionRouter from './routes/productoTransactions.routes';

const routes = Router();

routes.use('/api/v1/categorias', categoriaRouter);
routes.use('/api/v1/imagenes', imagenRouter);
routes.use('/api/v1/subcategorias', subCategoriaRouter);
routes.use('/api/v1/tags', tagRouter);
routes.use('/api/v1/usuarios', usuarioRouter);
routes.use('/api/v1/roles', rolesRouter);
routes.use('/api/v1/clientes', clientesRouter);
routes.use('/api/v1/pedidos', pedidoRouter);
routes.use('/api/v1/productos', productoRouter);
routes.use('/api/v1/productoTransaction', productoTransactionRouter);

export default routes;
