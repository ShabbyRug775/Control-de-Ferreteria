// Se importa libreria de express router
import {Router} from 'express'

// Se llaman los controladores desde index_controller
import {
    LogIn,
    SignInUp,
  } from "../Controladores/index.controller.js";

const router = Router()

/* Rutas para acceder sin cuenta */
// Rutas para Log-In //
router.post("/LogIn", LogIn);
// Ruta para Sign-In-Up //
router.post("/SignInUp", SignInUp);

export default router;