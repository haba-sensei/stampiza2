import express from 'express';
import Imagen from '../schemas/Imagen';

const router = express.Router();

router.route('/insertar').post(async (req, res) => {
	try {
		const nuevaImagen = new Imagen(req.body);
		const imagenGuardada = await nuevaImagen.save();
		res.status(201).json(imagenGuardada);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al insertar la imagen' });
	}
});

router.get('/buscar/:subCategoriaId', async (req, res) => {
    try {
        const subCategoriaId = req.params.subCategoriaId; 
        const reqPagina = typeof req.query.pagina === 'string' ? req.query.pagina : '1';
        const reqLimite = typeof req.query.limite === 'string' ? req.query.limite : '10';

        const pagina = parseInt(reqPagina);
        const limite = parseInt(reqLimite);

        const opciones = {
            page: pagina,
            limit: limite,
            sort: { nombre: 1 },
        };

        const imagenes = await Imagen.paginate({ subCategoria: subCategoriaId }, opciones);
        res.status(200).json(imagenes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar las imágenes por subcategoría' });
    }
});


router.route('/listar').get(async (req, res) => {
	try {
		const imagenes = await Imagen.find();
		res.status(200).json(imagenes);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al listar las imágenes' });
	}
});

router.put('/actualizar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const imagenActualizada = await Imagen.findByIdAndUpdate(id, datosActualizados, { new: true });

        if (!imagenActualizada) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }

        res.status(200).json(imagenActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la imagen' });
    }
});


router.delete('/eliminar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const imagenEliminada = await Imagen.findByIdAndDelete(id);

        if (!imagenEliminada) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }

        res.status(200).json({ message: 'Imagen eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la imagen' });
    }
});


export default router;
