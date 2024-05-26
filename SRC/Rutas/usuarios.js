// Se importa libreria de express router
import {Router} from 'express'

const router = Router()

// Manda la pagina solicitada
router.get('/index', (req, res) => res.render('index'))

export default router