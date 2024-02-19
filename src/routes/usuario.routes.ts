import express from 'express';
import * as usuarioController from '../controllers/usuarioController';
import { verifyToken } from '../middlewares/verifyToken';
import { authorizeRoles } from '../middlewares/roleAuthorization';

const router = express.Router();


router.post('/login', usuarioController.loginUsuario);

router.use(verifyToken);

router.post('/insertar', usuarioController.insertarUsuario);
router.get('/listar', usuarioController.listarUsuarios);
router.put('/actualizar/:id', usuarioController.actualizarUsuario);
router.delete('/eliminar/:id', usuarioController.eliminarUsuario);

export default router;
