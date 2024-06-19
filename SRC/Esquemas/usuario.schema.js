// Libreria zod para verificar errores
import { z } from "zod";

// Esquema para crear usuario
export const SignInUpSchema = z.object({

    nombre_usuario: z.string({
        required_error: "Se requiere un usuario",
    }),
    correo: z.string({
        required_error: "Se requiere un correo",
    })
        .email({
            message: "Correo no valido",
        }),
    telefono: z.number({
        required_error: "Se requiere un telefono",
    }),
    password: z.string({
        required_error: "Se requiere una contraseña",
    }).min(6, {
        message: "La contraseña debe tener mas de 6 caracteres",
    })

});

// Esquema para iniciar sesión 
export const LogInSchema = z.object({

    correo: z.string().email(),
    password: z.string().min(6),
    
});