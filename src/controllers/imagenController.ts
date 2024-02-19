import { $log } from 'ts-log-debug';
import Imagen from '../schemas/Imagen';

export const insertarImagen = async (req: any, res: any) => {
    try {
        const nuevaImagen = new Imagen(req.body);
        const imagenGuardada = await nuevaImagen.save();
        $log.info("Imagen guardada con exito");
        res.status(201).json(imagenGuardada);
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al insertar la imagen' });
    }
};

export const buscarImagenesPorSubCategoria = async (req: any, res: any) => {
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
            populate: 'tags'
        };

        const imagenes = await Imagen.paginate({ subCategoria: subCategoriaId }, opciones);
        $log.info("Buscar imagen por subcategoria");
        res.status(200).json(imagenes);
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al listar las imágenes por subcategoría' });
    }
};

export const buscarImagenesPorTag = async (req: any, res: any) => {
    try {
        const tagId = req.params.tagId;
        const reqPagina = typeof req.query.pagina === 'string' ? req.query.pagina : '1';
        const reqLimite = typeof req.query.limite === 'string' ? req.query.limite : '10';

        const pagina = parseInt(reqPagina);
        const limite = parseInt(reqLimite);

        const opciones = {
            page: pagina,
            limit: limite,
            sort: { nombre: 1 },
            populate: 'tags'
        };

        const imagenes = await Imagen.paginate({ tags: tagId }, opciones);
        $log.info("Buscar imagen por tags");
        res.status(200).json(imagenes);
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al buscar imágenes por tag' });
    }
};

export const listarImagenes = async (req: any, res: any) => {
    try {
        const imagenes = await Imagen.find().populate(['categoria', 'subCategoria', 'tags']);
        $log.info("Listar imagenes");
        res.status(200).json(imagenes);
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al listar las imágenes' });
    }
};

export const actualizarImagen = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const imagenActualizada = await Imagen.findByIdAndUpdate(id, datosActualizados, { new: true });

        if (!imagenActualizada) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }
        $log.info("Actualizar imagenes");
        res.status(200).json(imagenActualizada);
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al actualizar la imagen' });
    }
};

export const eliminarImagen = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const imagenEliminada = await Imagen.findByIdAndDelete(id);

        if (!imagenEliminada) {
            return res.status(404).json({ message: 'Imagen no encontrada' });
        }
        $log.info("Eliminar imagenes");

        res.status(200).json({ message: 'Imagen eliminada exitosamente' });
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al eliminar la imagen' });
    }
};