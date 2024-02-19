import express from 'express';
import * as tagController from '../controllers/tagController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/insertar', tagController.insertarTag);
router.get('/listar', tagController.listarTags);
router.put('/actualizar/:id', tagController.actualizarTag);
router.delete('/eliminar/:id', tagController.eliminarTag);

export default router;
