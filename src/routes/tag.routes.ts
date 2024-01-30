import express from 'express';
import Tag from '../schemas/Tag.js';

const router = express.Router();

router.post('/insertar', async (req, res) => {
    try {
        const nuevoTag = new Tag(req.body);
        const tagGuardado = await nuevoTag.save();
        res.status(201).json(tagGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar el tag' });
    }
});


router.get('/listar', async (req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar los tags' });
    }
});

router.put('/actualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const tagActualizado = await Tag.findByIdAndUpdate(id, req.body, { new: true });

        if (!tagActualizado) {
            return res.status(404).json({ message: 'Tag no encontrado' });
        }

        res.status(200).json(tagActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el tag' });
    }
});

router.delete('/eliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const tagEliminado = await Tag.findByIdAndDelete(id);

        if (!tagEliminado) {
            return res.status(404).json({ message: 'Tag no encontrado' });
        }

        res.status(200).json({ message: 'Tag eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el tag' });
    }
});


export default router;
