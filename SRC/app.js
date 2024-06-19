// Se importan las librerias necesarias
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Se llaman las rutas
import usuariosRoutes from "./Rutas/usuarios.js";
import articulosRoutes from "./Rutas/articulos.js";
import { FRONTEND_URL } from "./Configuracion/configuracion.js";

// Constante para llamar express
const app = express();

app.use(

    cors({
      credentials: true,
      origin: FRONTEND_URL,
    })

);

// App ocupa las librerias necesarias
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Rutas para los usuarios y para los articulos
app.use("/api/auth", usuariosRoutes);
app.use("/api", articulosRoutes);

/* if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html") );
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
} */

// Se exporta el app
export default app;