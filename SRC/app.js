// Se importan las librerias necesarias
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Se llaman las rutas
import indexRoutes from "./Rutas/index.js";
//import usuariosRoutes from "./Rutas/usuarios.js";
import { FRONTEND_URL } from "./Configuracion/configuracion.js";

const app = express();

/* app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
); */

app.use(morgan("dev"));
app.use(express.json());
//app.use(cookieParser());

app.use("/api/auth", indexRoutes);
//app.use("/api", usuariosRoutes);

/* if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html") );
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
} */

export default app;