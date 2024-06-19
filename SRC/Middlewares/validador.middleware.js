// Se exporta el esquema de validación 
export const validacionSchema = (schema) => (req, res, next) => {

    try {

        // se manda el esquema
        schema.parse(req.body);
        next();

    } catch (error) {

        // Si hay un error lo manda
        return res.status(400).json({ message: error.errors.map((error) => error.message) });

    }

};