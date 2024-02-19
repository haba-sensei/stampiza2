import mongoose from 'mongoose';

const { Schema } = mongoose;

const rolSchema = new Schema({
  nombre: {
    type: String, required: true, enum: [
      'admin',
      'Validador de Pagos y Direcciones',
      'Coordinador de Diseño e Impresión',
      'Especialista en Preparación de Pedidos',
      'Operador de Estampado Térmico',
      'Inspector de Calidad y Empaquetado',
      'Coordinador de Logística de Envío',
      'Agente de Servicio al Cliente'
    ]
  }
});
const Rol = mongoose.model('Rol', rolSchema);


export default Rol;
