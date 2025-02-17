// Se importa libreria de express router
import { Router } from 'express'

// Se llaman los controladores desde articulo_controller
import {

    altaArt,
    bajaArt,
    modArt,
    consulsArts,
    consulArt
    

} from "../Controladores/articulo.controller.js";

import { usuario } from "../Middlewares/usuario.middleware.js";
// Se importa el validador de esquema
import { validacionSchema } from "../Middlewares/validador.middleware.js";
// Se importa el esquema de iniciar sesion y registro de usuarios
import { crearArticuloSchema } from "../Esquemas/articulo.schema.js";

// Constante del router
const router = Router();

// Ruta de altas //
router.post("/articulos", usuario, validacionSchema(crearArticuloSchema), altaArt);
// Ruta de bajas //
router.delete("/articulos/:id", usuario, bajaArt);
// Ruta de consultas //
router.get("/articulos", usuario, consulsArts);
// Ruta de cambios //
router.put("/articulos/:id", usuario, modArt);
// Ruta de consulta individual //
router.get("/articulos/:id", usuario, consulArt);

// Se exporta el router con las rutas
export default router;