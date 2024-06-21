// libreria de mongoose
import mongoose from "mongoose";

// Esquema de usuario
const usuarioSchema = new mongoose.Schema(
    {
        nombre_usuario: {
            type: String,
            required: true,
            trim: true
        },
        correo: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('usuario', usuarioSchema)