import express from 'express';
import Categoria from '../schemas/Categoria';

const router = express.Router();

router.post('/insertar', async (req, res) => {
    try {
        const nuevaCategoria = new Categoria(req.body);
        const categoriaGuardada = await nuevaCategoria.save();
        res.status(201).json(categoriaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar la categoría' });
    }
});


router.get('/listar', async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar las categorías' });
    }
});


router.put('/actualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoriaActualizada = await Categoria.findByIdAndUpdate(id, req.body, { new: true });

        if (!categoriaActualizada) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.status(200).json(categoriaActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la categoría' });
    }
});

router.delete('/eliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoriaEliminada = await Categoria.findByIdAndDelete(id);

        if (!categoriaEliminada) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.status(200).json({ message: 'Categoría eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la categoría' });
    }
});


export default router;
