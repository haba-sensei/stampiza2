import ProductoTransaction from '../schemas/ProductoTransaction';

export async function insertar(req: any, res: any) {
    try {
        const nuevaTransaccion = new ProductoTransaction(req.body);
        const transaccionGuardada = await nuevaTransaccion.save();
        res.status(201).json(transaccionGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar la transacción del producto' });
    }
}

export async function listar(req: any, res: any) {
    try {
        const transacciones = await ProductoTransaction.find()
            .populate('pedido')
            .populate('producto')
            .populate('imagen');
        res.status(200).json(transacciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar las transacciones de productos' });
    }
}

export async function actualizar(req: any, res: any) {
    try {
        const id = req.params.id;
        const transaccionActualizada = await ProductoTransaction.findByIdAndUpdate(id, req.body, { new: true })
            .populate('pedido')
            .populate('producto')
            .populate('imagen');

        if (!transaccionActualizada) {
            return res.status(404).json({ message: 'Transacción de producto no encontrada' });
        }

        res.status(200).json(transaccionActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la transacción del producto' });
    }
}

export async function eliminar(req: any, res: any) {
    try {
        const id = req.params.id;
        const transaccionEliminada = await ProductoTransaction.findByIdAndDelete(id);

        if (!transaccionEliminada) {
            return res.status(404).json({ message: 'Transacción de producto no encontrada' });
        }

        res.status(200).json({ message: 'Transacción de producto eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la transacción del producto' });
    }
}
