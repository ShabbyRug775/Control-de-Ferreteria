// Se importa la libreria link de react-router-dom
import { Link } from "react-router-dom";

// Función de página principal
function HomePage() {

    // Retorna el html de la pagina principal
    return (

      <section className="bg-red-500 flex justify-center items-center">

          <header className="bg-zinc-800 p-10">

            <h1 className="text-5xl py-2 font-bold">Articulos de ferreteria</h1>

            <p className="text-md text-slate-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
              fugit doloremque molestias recusandae labore repellat amet dicta tempore
              necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
              quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
              ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
              officia accusantium vitae doloremque, molestias modi.
            </p>

            <Link
              className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
              to="/SignInUpPage"
            >
              Iniciar
            </Link>

          </header>

      </section>

    );

}

// Exporta la pagina principal
export default HomePage;