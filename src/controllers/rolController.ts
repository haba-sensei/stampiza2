import Rol from '../schemas/Rol';

export const crearRol = async (req: any, res: any) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ message: 'Nombre del rol es requerido' });
        }
        const nuevoRol = new Rol({ nombre });
        const rolGuardado = await nuevoRol.save();
        res.status(201).json(rolGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el rol' });
    }
};

export const listarRoles = async (req: any, res: any) => {
    try {
        const roles = await Rol.find();
        res.status(200).json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar los roles' });
    }
};

export const actualizarRol = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const rolActualizado = await Rol.findByIdAndUpdate(id, { nombre }, { new: true });
        if (!rolActualizado) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.status(200).json(rolActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el rol' });
    }
};

export const eliminarRol = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const rolEliminado = await Rol.findByIdAndDelete(id);
        if (!rolEliminado) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.status(200).json({ message: 'Rol eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el rol' });
    }
};
