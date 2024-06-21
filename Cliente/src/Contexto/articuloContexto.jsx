// Rutas de contexto de react
import { createContext, useContext, useState } from "react";
// Rutas de articulos
import {

  altaArtRequest,
  bajaArtRequest,
  consulsArtsRequest,
  modArtRequest,
  consulArtRequest
  
} from "../Api/articulo";

// Se crea un contexto de react
const articuloContext = createContext();

export const usarArticulo = () => {

  const context = useContext(articuloContext);

  if (!context) throw new Error("usarArticulo debe ser utilizado dentro de un articuloProvider");

  return context;

};

export function ArticuloProvider({ children }) {
  
  const [articulo, setArt] = useState([]);

  // Consultas de articulos
  const consulsArts = async () => {
    const res = await consulsArtsRequest();
    setArt(res.data);
  };

  // Baja de articulos
  const bajaArt = async (id) => {
    try {
      const res = await bajaArtRequest(id);
      if (res.status === 204) setArt(articulo.filter((articulo) => articulo._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Alta de articulo
  const altaArt = async (articulo) => {
    try {
      const res = await altaArtRequest(articulo);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Consulta inidividual de articulo
  const consulArt = async (id) => {
    try {
      const res = await consulArtRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  // Modificar articulo
  const modArt = async (id, articulo) => {
    try {
      await modArtRequest(id, articulo);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <articuloContext.Provider
      value={{
        articulo,
        consulsArts,
        bajaArt,
        altaArt,
        consulArt,
        modArt,
      }}
    >
      {children}
    </articuloContext.Provider>

  );
}