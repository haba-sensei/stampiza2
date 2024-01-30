import express from 'express';
import Usuario from '../schemas/Usuario.js';

const router = express.Router();

router.post('/insertar', async (req, res) => {
	try {
		const nuevoUsuario = new Usuario(req.body);
		const usuarioGuardado = await nuevoUsuario.save();
		res.status(201).json(usuarioGuardado);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al insertar el usuario' });
	}
});

router.get('/listar', async (req, res) => {
	try {
		const usuarios = await Usuario.find();
		res.status(200).json(usuarios);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al listar los usuarios' });
	}
});

router.put('/actualizar/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

		if (!usuarioActualizado) {
			return res.status(404).json({ message: 'Usuario no encontrado' });
		}

		res.status(200).json(usuarioActualizado);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al actualizar el usuario' });
	}
});

router.delete('/eliminar/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const usuarioEliminado = await Usuario.findByIdAndDelete(id);

		if (!usuarioEliminado) {
			return res.status(404).json({ message: 'Usuario no encontrado' });
		}

		res.status(200).json({ message: 'Usuario eliminado exitosamente' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al eliminar el usuario' });
	}
});

export default router;
