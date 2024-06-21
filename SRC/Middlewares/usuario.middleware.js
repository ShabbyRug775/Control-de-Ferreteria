// Se importa la libreria de jwt y el token
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../Configuracion/configuracion.js";

// Constante de usuario que verifica el token
export const usuario = (req, res, next) => {

    try {
        // Se verifica que el token se encuentre en las cookies
        const { token } = req.cookies;

        // Si no hay token no coincide
        if (!token) return res.status(401).json({ message: "No tienes token, acceso denegado." });

        // Verificación del token
        jwt.verify(token, TOKEN_SECRET, (error, usuario) => {

            // Si ocurre algún error lo muestra
            if (error) {

                // Se muestra un mensaje si el token no es valido
                return res.status(401).json({ message: "Token no válido." });

            }

            // Si el usuario coincide lo asigna a usuario requerido
            req.usuario = usuario;
            next();

        });

    } catch (error) {

        // Si hay un error lo manda
        return res.status(500).json({ message: error.message });

    }
};