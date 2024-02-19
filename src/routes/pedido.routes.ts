import express from 'express';
import * as pedidoController from '../controllers/pedidoController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', pedidoController.insertarPedido);
router.get('/listar', pedidoController.listarPedidos);
router.put('/actualizar/:id', pedidoController.actualizarPedido);
router.delete('/eliminar/:id', pedidoController.eliminarPedido);

export default router;
