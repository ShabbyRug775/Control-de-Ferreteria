// libreria de mongoose
import mongoose from "mongoose";

// Esquema de articulos
mongoose.Schema({
    id_articulo : {
        type : int,
        required : true,
        trim : true,
        unique : true
    },
    nombre_articulo : {
        type : String,
        required : true,
        trim : true
    },
    codigo_barras_art : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    descripcion_articulo : {
        type : String,
        required : true,
        trim : true
    },
    imagen_articulo : {
        type : Image
    }
})

export default mongoose.model('articulo', articuloSchema)