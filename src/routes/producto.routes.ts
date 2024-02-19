import express from 'express';
import * as productoController from '../controllers/productoController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', productoController.insertarProducto);
router.get('/listar', productoController.listarProductos);
router.put('/actualizar/:id', productoController.actualizarProducto);
router.delete('/eliminar/:id', productoController.eliminarProducto);

export default router;
