// libreria de mongoose
import mongoose from "mongoose";

// Esquema de usuario
mongoose.Schema({
    nombre_usuario : {
        type : String,
        required : true,
        trim : true
    },
    correo : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    telefono : {
        type : int,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    }
})

export default mongoose.model('usuario', usuarioSchema)