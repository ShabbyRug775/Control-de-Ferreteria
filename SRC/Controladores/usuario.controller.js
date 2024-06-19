// Se importan las librerias
import usuario from "../Modelos/usuario.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../Configuracion/configuracion.js";
import { createAccessToken } from "../Libs/jwt.js";

// Log-In de usuario
export const LogIn = async (req, res) => {

    try {

        // Constante para guardar datos del usuario
        const { correo, password } = req.body;

        // Se busca si hay un usuario con un correo ya usado
        const usarioEncontrado = await usuario.findOne({ correo });

        // Si no lo encuentra manda un mensaje
        if (!usarioEncontrado) return res.status(400).json({

            // Mensaje de correo no encontrado
            message: ["No se ha encontrado el correo."]

        });

        // Constante para comparar las contraseñas
        const isMatch = await bcrypt.compare(password, usarioEncontrado.password);

        // Si no coinciden las contraseñas
        if (!isMatch) return res.status(400).json({

            // Mensaje de contraseña incorrecta
            message: ["La contraseña es incorrecta."]

        });

        // Se verifica el token de acceso
        const token = await createAccessToken({

            id: usarioEncontrado._id,
            nombre_usuario: usarioEncontrado.nombre_usuario

        });

        // Se manda el token para revisión
        res.cookie("token", token, {

            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none"

        });

        // Manda la información del usuario
        res.json({

            id: usarioEncontrado._id,
            nombre_usuario: usarioEncontrado.nombre_usuario,
            correo: usarioEncontrado.correo

        });

    } catch (error) {

        // Si ocurre un error lo manda
        res.status(500).json({ message: error.message });

    }

};

// Registro de usuario
export const SignInUp = async (req, res) => {

    try {

        // Constante para guardar datos del usuario
        const { nombre_usuario, correo, telefono, password } = req.body;

        // Se busca si hay un usuario con un correo ya usado
        const usarioEncontrado = await usuario.findOne({ correo });

        // Si lo encuentra manda un mensaje
        if (usarioEncontrado) return res.status(400).json({

            // Mensaje de correo encontrado
            message: ["Este correo ya se encuentra en uso"]

        });

        // Encriptando la contraseña
        const passwordHash = await bcrypt.hash(password, 10);

        // Creación de nuevo usuario
        const nuevoUsuario = new usuario({

            nombre_usuario,
            correo,
            telefono,
            password: passwordHash,

        });

        // Se guarda el usuario en la base de datos
        const usuarioGuardado = await nuevoUsuario.save();

        // Token de acceso
        const token = await createAccessToken({

            id: usuarioGuardado._id

        });

        // Se manda el token para revisión
        res.cookie("token", token, {

            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none"

        });

        // Manda la información del usuario
        res.json({

            id: usuarioGuardado._id,
            nombre_usuario: usuarioGuardado.nombre_usuario,
            correo: usuarioGuardado.correo,
            telefono: usuarioGuardado.telefono

        });

    } catch (error) {

        // Si ocurre un error lo manda
        res.status(500).json({ message: error.message });
    }

};

// Verificación del token
export const verifyToken = async (req, res) => {

    // Constante de token
    const { token } = req.cookies;

    // Si el token no coincide manda un false
    if (!token) return res.send(false);

    // Verificación del token
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {

        // Si ocurre un error lo manda
        if (error) return res.sendStatus(401);

        // Se busca al usuario por su id
        const usarioEncontrado = await usuario.findById(user.id);

        // Si no se encuentra se manda un mensaje de error
        if (!usarioEncontrado) return res.sendStatus(401);

        // Se regresa la información del usuario
        return res.json({

            id: usarioEncontrado._id,
            nombre_usuario: usarioEncontrado.nombre_usuario,
            correo: usarioEncontrado.correo

        });

    });
};

// Cerrar sesion
export const LogOut = async (req, res) => {

    // Respuesta para cerrar sesión 
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
    });

    // Retorna el status de la sesión
    return res.sendStatus(200);

};