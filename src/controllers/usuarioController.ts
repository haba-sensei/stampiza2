import Usuario from '../schemas/Usuario';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const loginUsuario = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email }).populate('rol');
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const validPassword = await bcrypt.compare(password, usuario.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña inválida' });
        }

        const token = jwt.sign(
            { userId: usuario._id, email: usuario.email, rol: usuario.rol },
            process.env.JWT_SECRET || 'tuSecreto',
            { expiresIn: '24h' }
        );

        res.json({ message: 'Autenticación exitosa', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

export const insertarUsuario = async (req: any, res: any) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar el usuario' });
    }
};

export const listarUsuarios = async (req: any, res: any) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar los usuarios' });
    }
};

export const actualizarUsuario = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

        if (!usuarioActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(usuarioActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
};

export const eliminarUsuario = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);

        if (!usuarioEliminado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};
