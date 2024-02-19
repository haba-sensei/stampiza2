import { Request, Response } from 'express';
import Categoria from '../schemas/Categoria';
import { $log } from 'ts-log-debug';

export const insertarCategoria = async (req: Request, res: Response) => {
    try {
        const nuevaCategoria = new Categoria(req.body);
        const categoriaGuardada = await nuevaCategoria.save();
        res.status(201).json(categoriaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar la categoría' });
    }
};

export const listarCategorias = async (req: Request, res: Response) => {
    try {
        const categorias = await Categoria.find();
        $log.info("Listar categorias");
        res.status(200).json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar las categorías' });
    }
};

export const actualizarCategoria = async (req: Request, res: Response) => {
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
};

export const eliminarCategoria = async (req: Request, res: Response) => {
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
};
