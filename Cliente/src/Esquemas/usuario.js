// Libreria zod para verificar errores
import { z } from "zod";

// Esquema para crear usuario
export const SignInUpSchema = z.object({

    nombre_usuario: z.string({
        required_error: "Se requiere un usuario",
    }).min(3, {
        message: "El nombre de usuario debe tener mínimo 3 caracteres",
    }),
    correo: z.string({
        required_error: "Se requiere un correo",
    })
      .email({
          message: "Correo no valido",
      }),
    password: z.string({
        required_error: "Se requiere una contraseña",
    }).min(6, {
        message: "La contraseña debe tener mas de 6 caracteres",
    }),
    confirmPassword: z.string({
        required_error: "Se requiere una contraseña",
    }).min(6, {
        message: "La contraseña debe tener mas de 6 caracteres",
    })

}).refine((data) => data.password === data.confirmPassword, {

    message: "La contraseña no coincide",
    path: ["confirmPassword"],
    
});

// Esquema para iniciar sesión 
export const LogInSchema = z.object({

  correo: z.string().email({
        message: "Por favor ingresa un correo válido",
    }),
    password: z.string().min(6, {
        message: "La contraseña debe tener mas de 6 caracteres",
    }),

});
