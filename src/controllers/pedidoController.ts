import Pedido from '../schemas/Pedido';

export const insertarPedido = async (req: any, res: any) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        const pedidoGuardado = await nuevoPedido.save();
        res.status(201).json(pedidoGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar el pedido' });
    }
};

export const listarPedidos = async (req: any, res: any) => {
    try {
        const pedidos = await Pedido.find()
            .populate('cliente')
            .populate({
                path: 'productos',
                populate: { path: 'producto imagen' }
            });
        res.status(200).json(pedidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar los pedidos' });
    }
};

export const actualizarPedido = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const pedidoActualizado = await Pedido.findByIdAndUpdate(id, req.body, { new: true })
            .populate('cliente')
            .populate({
                path: 'productos',
                populate: { path: 'producto imagen' }
            });

        if (!pedidoActualizado) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }

        res.status(200).json(pedidoActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el pedido' });
    }
};

export const eliminarPedido = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const pedidoEliminado = await Pedido.findByIdAndDelete(id);

        if (!pedidoEliminado) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }

        res.status(200).json({ message: 'Pedido eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el pedido' });
    }
};
