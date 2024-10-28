// Se importa libreria de express router
import { Router } from 'express'

// Se llaman los controladores desde usuario_controller
import {

    LogIn,
    LogOut,
    SignInUp,
    verifyToken

} from "../Controladores/usuario.controller.js";

// Se importa el validador de esquema
import { validacionSchema } from "../Middlewares/validador.middleware.js";
// Se importa el esquema de iniciar sesion y registro de usuarios
import { LogInSchema, SignInUpSchema } from "../Esquemas/usuario.schema.js";

// Constante del router
const router = Router()

// Ruta para Log-In //
router.post("/LogIn", validacionSchema(LogInSchema), LogIn);
// Ruta para Sign-In-Up //
router.post("/SignInUp", validacionSchema(SignInUpSchema), SignInUp);
// Ruta para verificar el token //
router.get("/verifyToken", verifyToken);
// Ruta para Log-Out //
router.post("/LogOut", verifyToken, LogOut);

// Se exporta el router con las rutas
export default router;