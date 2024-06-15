// Se importa libreria de express router
import {Router} from 'express'

const router = Router()

// Ruta de pagina principal //
router.get('/index', (req, res) => res.render('index'))
// Ruta de perfil de usuarios //
router.get('/perfil_usuario', (req, res) => res.render('perfil_usuario'))
// Ruta de todos los articulos //
router.get('/articulos', (req, res) => res.render('articulos'))
// Ruta de todos los articulos //
router.get('/altas_articulo', (req, res) => res.render('altas_articulo'))

export default router