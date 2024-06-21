// Se manda a llamar axios
import axios from "./axios";

// Request de registro de usuario
export const SigInUpRequest = async (usuario) => axios.post(`/usuario/SignInUp`, usuario);
// Request de login de usuario
export const LogInRequest = async (usuario) => axios.post(`/usuario/LogIn`, usuario);
// Request de verificacion del token
export const verificarTokenRequest = async () => axios.get(`/usuario/verificar`);