import express from 'express';
import * as clienteController from '../controllers/clienteController';
import { verifyToken } from '../middlewares/verifyToken';

const router = express.Router();

router.post('/registrar', clienteController.registrarCliente);
router.post('/login', clienteController.loginCliente);

router.use(verifyToken);

router.post('/insertar', clienteController.insertarCliente);
router.get('/listar', clienteController.listarClientes);
router.put('/actualizar/:id', clienteController.actualizarCliente);
router.delete('/eliminar/:id', clienteController.eliminarCliente);

export default router;
