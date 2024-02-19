import express from 'express';
import * as rolController from '../controllers/rolController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();

router.post('/crear', rolController.crearRol);
router.get('/listar', rolController.listarRoles);
router.put('/actualizar/:id', rolController.actualizarRol);
router.delete('/eliminar/:id', rolController.eliminarRol);

export default router;
