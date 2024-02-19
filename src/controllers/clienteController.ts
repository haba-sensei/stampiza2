import Cliente from '../schemas/Cliente';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const loginCliente = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const cliente = await Cliente.findOne({ email });
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        const validPassword = await bcrypt.compare(password, cliente.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña inválida' });
        }

        const token = jwt.sign(
            { clienteId: cliente._id, email: cliente.email },
            process.env.JWT_SECRET || '1b77c1c7306f582c95835d276ecc16effe4929924ac9aad85fa76e69f95aeb39',
            { expiresIn: '24h' }
        );

        res.json({ message: 'Login exitoso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

export const registrarCliente = async (req: any, res: any) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const nuevoCliente = new Cliente({
            email: req.body.email,
            password: hashedPassword,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            coordenadas: req.body.coordenadas,
        });

        const clienteGuardado = await nuevoCliente.save();

        res.status(201).json({ message: "Cliente registrado exitosamente", cliente: clienteGuardado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el cliente' });
    }
};


export const insertarCliente = async (req: any, res: any) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        const clienteGuardado = await nuevoCliente.save();
        res.status(201).json(clienteGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al insertar el cliente' });
    }
};

export const listarClientes = async (req: any, res: any) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al listar los clientes' });
    }
};

export const actualizarCliente = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const clienteActualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });

        if (!clienteActualizado) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.status(200).json(clienteActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
};

export const eliminarCliente = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const clienteEliminado = await Cliente.findByIdAndDelete(id);

        if (!clienteEliminado) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.status(200).json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
};
