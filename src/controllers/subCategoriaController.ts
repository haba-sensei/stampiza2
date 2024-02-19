import { $log } from 'ts-log-debug';
import SubCategoria from '../schemas/SubCategoria';

export const insertarSubCategoria = async (req: any, res: any) => {
    try {
        const nuevaSubCategoria = new SubCategoria(req.body);
        const subCategoriaGuardada = await nuevaSubCategoria.save();
        res.status(201).json(subCategoriaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar la subcategoría' });
    }
};

export const listarSubCategorias = async (req: any, res: any) => {
    try {
        const subCategorias = await SubCategoria.find().populate('categoria');
        res.status(200).json(subCategorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar las subcategorías' });
    }
};

export const listarSubCategoriasByCatId = async (req: any, res: any) => {
    try {
        const categoriaId = req.params.id;
        const reqPagina = typeof req.query.pagina === 'string' ? req.query.pagina : '1';
        const reqLimite = typeof req.query.limite === 'string' ? req.query.limite : '10';

        const pagina = parseInt(reqPagina);
        const limite = parseInt(reqLimite);

        const opciones = {
            page: pagina,
            limit: limite,
            sort: { nombre: 1 }
        };

        const subCategorias = await SubCategoria.paginate({ categoria: categoriaId }, opciones);
        $log.info("Buscar subCategorias por categoria");
        res.status(200).json(subCategorias);
    } catch (error) {
        $log.error(error);
        res.status(500).json({ message: 'Error al listar las subCategorias por categoría' });
    }
};

export const actualizarSubCategoria = async (req: any, res: any) => {
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
};

export const eliminarSubCategoria = async (req: any, res: any) => {
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
};
