// Rutas de react, api y cookies
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { LogInRequest, SigInUpRequest, verifyTokenRequest } from "../Api/usuario";
import Cookies from "js-cookie";

// Se crea un contexto de react
const UsuarioContexto = createContext();

// Constante para usar el usuario
export const usarUsuario = () => {

    const context = useContext(UsuarioContexto);

    if (!context) throw new Error("usarUsuario debe ser utilizado dentro de un usuarioProvider");

    return context;

};

export const UsuarioProvider = ({ children }) => {

  const [usuario, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // Alta de usuario
  const SignInUp = async (usuario) => {
    try {
      const res = await SigInUpRequest(usuario);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  // Login de usuario
  const LogIn = async (usuario) => {
    try {
      const res = await LogInRequest(usuario);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Cerrar sesion
  const LogOut = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
        
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    
    <UsuarioContexto.Provider
      value={{
        usuario,
        SignInUp,
        LogIn,
        LogOut,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </UsuarioContexto.Provider>

  );

};

// Se exporta el contexto de usuario
export default UsuarioContexto;