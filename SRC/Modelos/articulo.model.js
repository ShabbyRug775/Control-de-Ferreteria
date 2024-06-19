// libreria de mongoose
import mongoose from "mongoose";

// Esquema de articulos
const articuloSchema = new mongoose.Schema(
    {
        nombre_articulo: {
            type: String,
            required: true,
            trim: true
        },
        codigo_barras_art: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        descripcion_articulo: {
            type: String,
            required: true,
            trim: true
        },
        imagen_articulo: {
            type: Image
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('articulo', articuloSchema)