// Se importan las rutas de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Se manda a llamar la Navbar
import { Navbar } from "./Componentes/Navbar";
// Se manda a llamar el contexto de usuario
import { UsuarioProvider } from "./Contexto/usuarioContexto";
// Se manda a llamar el contexto de los articulos
import { ArticuloProvider } from "./Contexto/articuloContexto";
// Ruta protegida
import { RutaProtegida } from "./Rutas/Rutas";

// Ruta de home
import HomePage from "./Paginas/Home";
// Ruta de registro de usuario
import SignInUpPage from "./Paginas/SignInUpPage";
// Ruta de LogIn
import { LogInPage } from "./Paginas/LogInPage";
// Ruta para los articulos
import { ArticulosForm } from "./Paginas/ArticulosForm";
// Ruta para las consultas
import { ArticulosPage } from "./Paginas/ArticulosPage";

// Funcion App
function App() {

    // Me regresa todas las solicitudes
    return (
        <UsuarioProvider>

            <ArticuloProvider>

                <BrowserRouter>

                    <main className="container content-container mx-auto px-10 md:px-0">

                        <Navbar />
                        <Routes>

                            <Route path="/" element={<HomePage />} />
                            <Route path="/LogInPage" element={<LogInPage />} />
                            <Route path="/SignInUpPage" element={<SignInUpPage />} />
                            <Route element={<RutaProtegida />}>
                                <Route path="/articulos" element={<ArticulosPage />} />
                                <Route path="/ArticulosForm" element={<ArticulosForm />} />
                                <Route path="/articulos/:id" element={<ArticulosForm />} />
                                <Route path="/perfil" element={<h1>Profile</h1>} />
                            </Route>

                        </Routes>

                    </main>

                </BrowserRouter>

            </ArticuloProvider>

        </UsuarioProvider>
    );
}

// Se exporta App
export default App;