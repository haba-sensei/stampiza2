import express from 'express';
import * as categoriaController from '../controllers/categoriaController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', categoriaController.insertarCategoria);
router.get('/listar', categoriaController.listarCategorias);
router.put('/actualizar/:id', categoriaController.actualizarCategoria);
router.delete('/eliminar/:id', categoriaController.eliminarCategoria);

export default router;
