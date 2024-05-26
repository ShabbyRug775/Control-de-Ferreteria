// Se importa libreria de express
import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './Rutas/index.js'
import userRouter from './Rutas/usuarios.js'

// Constante app que usa express
const app = express()

const _dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(_dirname, 'Paginas'))

app.set('view engine', 'ejs')
app.use(indexRouter)

// Servidor inicializado en el puerto 3077
app.listen(3077)

console.log('Servidor iniciado en el puerto', 3077)
