// Se importa libreria de express router
import { Router } from 'express'

// Se llaman los controladores desde articulo_controller
import {

    altaArt,
    bajaArt,
    actuArt,
    consulArts,
    consulArtInd
    

} from "../Controladores/articulo.controller.js";

import { auth } from "../Middlewares/usuario.middleware.js";
// Se importa el validador de esquema
import { validacionSchema } from "../Middlewares/validador.middleware.js";
// Se importa el esquema de iniciar sesion y registro de usuarios
import { crearArticuloSchema } from "../Esquemas/articulo.schema.js";

// Constante del router
const router = Router()

// Ruta de altas //
router.post("/Altas", auth, validacionSchema(crearArticuloSchema), altaArt);
// Ruta de bajas //
router.delete("/Bajas/:id", auth, bajaArt);
// Ruta de cambios //
router.put("/Cambios/:id", auth, actuArt);
// Ruta de consultas //
router.get("/Consultas", auth, consulArts);
// Ruta de consulta individual //
router.get("/ConsultaInd/:id", auth, consulArtInd);

// Se exporta el router con las rutas
export default router;