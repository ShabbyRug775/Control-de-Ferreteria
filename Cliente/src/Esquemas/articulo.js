// Libreria zod para verificar errores
import { z } from "zod";

// Esquema para crear articulos
export const crearArticuloSchema = z.object({

    nombre_articulo: z.string({
        required_error: "Se requiere un nombre de articulo",
    }),
    codigo_barras_art: z.string({
        required_error: "Se requiere un codigo de barras",
    }),
    descripcion_articulo: z.string({
        required_error: "Se requiere una descripcion",
    })

});