// Se importa libreria de react y el contexto de usuario
import { Navigate, Outlet } from "react-router-dom";
import { usarUsuario } from "../Contexto/usuarioContexto";

// Se crea una ruta protegida
export const RutaProtegida = () => {

    // Cuando se haya autentificado le manda el contexto de usuario
    const { isAuthenticated, loading } = usarUsuario();
    // Si está cargando manda un titulo de "Cargando"
    if (loading) return <h1>Cargando...</h1>;
    // Si no se autentificó y no está cargando, lo manda al login
    if (!isAuthenticated && !loading) return <Navigate to="/LogIn" replace />;
    // Retorna outlet
    return <Outlet />;
    
};