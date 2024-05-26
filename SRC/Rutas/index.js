// Se importa libreria de express router
import {Router} from 'express'

const router = Router()

/* Rutas para acceder sin cuenta */
// Rutas para Log-In //
router.get('/', (req, res) => res.render('Log-In'))
router.get('/Log-In', (req, res) => res.render('Log-In'))
// Ruta para Sign-In-Up //
router.get('/Sign-In-Up', (req, res) => res.render('Sign-In-Up'))

export default router