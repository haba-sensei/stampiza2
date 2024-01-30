import express from 'express';
import SubCategoria from '../schemas/SubCategoria';

const router = express.Router();

router.post('/insertar', async (req, res) => {
    try {
        const nuevaSubCategoria = new SubCategoria(req.body);
        const subCategoriaGuardada = await nuevaSubCategoria.save();
        res.status(201).json(subCategoriaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar la subcategoría' });
    }
});


router.get('/listar', async (req, res) => {
    try {
        const subCategorias = await SubCategoria.find();
        res.status(200).json(subCategorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar las subcategorías' });
    }
});


router.put('/actualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const subCategoriaActualizada = await SubCategoria.findByIdAndUpdate(id, req.body, { new: true });

        if (!subCategoriaActualizada) {
            return res.status(404).json({ message: 'Subcategoría no encontrada' });
        }

        res.status(200).json(subCategoriaActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la subcategoría' });
    }
});
 
router.delete('/eliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const subCategoriaEliminada = await SubCategoria.findByIdAndDelete(id);

        if (!subCategoriaEliminada) {
            return res.status(404).json({ message: 'Subcategoría no encontrada' });
        }

        res.status(200).json({ message: 'Subcategoría eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la subcategoría' });
    }
});


export default router;
