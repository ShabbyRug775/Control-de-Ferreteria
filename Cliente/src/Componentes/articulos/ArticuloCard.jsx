import { usarArticulo } from "../../Contexto/articuloContexto";
import { Button, ButtonLink, Card } from "../UI";

export function ArticuloCard({ articulo }) {

  const { bajaArt } = usarArticulo();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{articulo.nombre_articulo}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => bajaArt(articulo._id)}> Borrar </Button>
          <ButtonLink to={`/articulos/${articulo._id}`}> Editar </ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{articulo.codigo_barras_art}</p>
      <p className="text-slate-300">{articulo.descripcion_articulo}</p>
      {/* format date */}
      <p>
        {articulo.date &&
          new Date(articulo.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}