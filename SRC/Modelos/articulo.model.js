// libreria de mongoose
import mongoose from "mongoose";

// Esquema de articulos
const articuloSchema = new mongoose.Schema(
    {
        nombre_articulo: {
            type: String,
            required: true,
        },
        codigo_barras_art: {
            type: String,
            required: true,
        },
        descripcion_articulo: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            default: Date.now,
        },
        usuario: {
            type: mongoose.Types.ObjectId,
            ref: "usuario",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('articulo', articuloSchema)