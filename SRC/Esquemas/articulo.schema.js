// Libreria zod para verificar errores
import { z } from "zod";

// Validación personalizada para base64
const base64Regex = /^([0-9a-zA-Z+/]{4})*([0-9a-zA-Z+/]{2}==|[0-9a-zA-Z+/]{3}=)?$/;
const base64Validator = z.string().regex(base64Regex, {
    message: "La imagen debe estar en formato base64"
});

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
    }),
    imagen_articulo: z.union(base64Validator).optional()

});