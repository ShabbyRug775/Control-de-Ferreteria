// Se importan las librerias
import articulo from "../Modelos/articulo.model.js";

// Consultas de articulos
export const consulsArts = async (req, res) => {

    try {

        const articulos = await articulo.find({ usuario: req.usuario.id }).populate("usuario");
        res.json(articulos);

    } catch (error) {

        // Si ocurre un error lo manda
        return res.status(500).json({ message: error.message });
    }

};

// Altas de articulos
export const altaArt = async (req, res) => {

    try {

        // Constante para guardar datos del articulo
        const { nombre_articulo, codigo_barras_art, descripcion_articulo } = req.body;

        // Creación de nuevo articulo
        const nuevoArt = new articulo({
            nombre_articulo,
            codigo_barras_art,
            descripcion_articulo,
            usuario: req.usuario.id

        });

        // Guarda el nuevo articulo
        await nuevoArt.save();
        // Manda el nuevo articulo
        res.json(nuevoArt);

    } catch (error) {

        // Si ocurre un error lo manda
        return res.status(500).json({ message: error.message });
    }

};

// Bajas de articulos
export const bajaArt = async (req, res) => {

    try {

        // Constante para buscar el articulo y borrarlo
        const borrarArt = await articulo.findByIdAndDelete(req.params.id);

        // Si no se encuentra el articulo manda un mensaje de error
        if (!borrarArt) return res.status(404).json({ message: "Articulo no encontrado." });

        // Manda el estatus de la petición
        return res.sendStatus(204);

    } catch (error) {

        // Si ocurre un error lo manda
        return res.status(500).json({ message: error.message });
    }

};

// Cambios de articulos
export const modArt = async (req, res) => {

    try {

        // Constante para actualizar el articulo
        const { nombre_articulo, codigo_barras_art, descripcion_articulo, date } = req.body;

        // Busca y actualiza el articulo
        const artiMod = await articulo.findOneAndUpdate(

            { _id: req.params.id },
            { nombre_articulo, codigo_barras_art, descripcion_articulo, date },
            { new: true }

        );

        // Manda el articulo modificado
        return res.json(artiMod);

    } catch (error) {

        // Si ocurre un error lo manda
        return res.status(500).json({ message: error.message });
    }

};

// Consulta individual de articulo
export const consulArt = async (req, res) => {

    try {

        // Se busca el articulo individualmente
        const arti = await articulo.findById(req.params.id);

        // Si no lo encuentra manda un mensaje de error
        if (!arti) return res.status(404).json({ message: "Articulo no encontrado." });

        // Manda el articulo encontrado
        return res.json(arti);

    } catch (error) {

        // Si ocurre un error lo manda
        return res.status(500).json({ message: error.message });
    }

};