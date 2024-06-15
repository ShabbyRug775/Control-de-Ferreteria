// libreria de mongoose
import mongoose from "mongoose";
import { MONGODB_URI } from "../Configuracion/configuracion.js";

// Se exporta la conexion con la base
export const connectDB = async () => {

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB se ha conectado");
    } catch (error) {
        console.error(error);
    }
  
};