import express from 'express';
import * as imagenController from '../controllers/imagenController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', imagenController.insertarImagen);
router.get('/buscar/:subCategoriaId', imagenController.buscarImagenesPorSubCategoria);
router.get('/buscar-por-tag/:tagId', imagenController.buscarImagenesPorTag);
router.get('/listar', imagenController.listarImagenes);
router.put('/actualizar/:id', imagenController.actualizarImagen);
router.delete('/eliminar/:id', imagenController.eliminarImagen);

export default router;
