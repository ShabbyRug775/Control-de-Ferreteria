// Se manda a llamar axios
import axios from "./axios";

// Request de consultas de articulos
export const consulsArtsRequest = async () => axios.get("/ConsulArticulos");
// Request de altas de articulos
export const altaArtRequest = async (articulo) => axios.post("/ArticulosFrom", articulo);
// Request de bajas de articulos
export const bajaArtRequest = async (id) => axios.delete(`/ConsulArticulos/${id}`);
// Request de cambios de articulos
export const modArtRequest = async (articulo) => axios.put(`/ConsulArticulos/${articulo._id}`, articulo);
// Request de consulta de articulo individual
export const consulArtRequest = async (id) => axios.get(`/ConsulArticulos/${id}`);