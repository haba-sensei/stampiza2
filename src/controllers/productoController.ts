import Producto from '../schemas/Producto';

export const insertarProducto = async (req: any, res: any) => {
    try {
        const nuevoProducto = new Producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar el producto' });
    }
};

export const listarProductos = async (req: any, res: any) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar los productos' });
    }
};

export const actualizarProducto = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, { new: true });

        if (!productoActualizado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(productoActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};

export const eliminarProducto = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const productoEliminado = await Producto.findByIdAndDelete(id);

        if (!productoEliminado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};
