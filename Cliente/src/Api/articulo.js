// Se manda a llamar axios
import axios from "./axios";

// Request de consultas de articulos
export const consulsArtsRequest = async () => axios.get("/articulos");
// Request de altas de articulos
export const altaArtRequest = async (articulo) => axios.post("/articulos", articulo);
// Request de bajas de articulos
export const bajaArtRequest = async (id) => axios.delete(`/articulos/${id}`);
// Request de cambios de articulos
export const modArtRequest = async (id, articulo) => axios.put(`/articulos/${id}`, articulo);
// Request de consulta de articulo individual
export const consulArtRequest = async (id) => axios.get(`/articulos/${id}`);