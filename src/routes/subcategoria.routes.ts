import express from 'express';
import * as subCategoriaController from '../controllers/subCategoriaController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', subCategoriaController.insertarSubCategoria);
router.get('/listar', subCategoriaController.listarSubCategorias);
router.get('/buscar/:id', subCategoriaController.listarSubCategoriasByCatId);
router.put('/actualizar/:id', subCategoriaController.actualizarSubCategoria);
router.delete('/eliminar/:id', subCategoriaController.eliminarSubCategoria);

export default router;
