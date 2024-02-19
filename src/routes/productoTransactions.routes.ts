import express from 'express';
import * as productoTransactionController from '../controllers/productoTransactionController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', productoTransactionController.insertar);
router.get('/listar', productoTransactionController.listar);
router.put('/actualizar/:id', productoTransactionController.actualizar);
router.delete('/eliminar/:id', productoTransactionController.eliminar);

export default router;
