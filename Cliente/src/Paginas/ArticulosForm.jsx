// Se importan librerias de react, dayjs, componentes y contexto de articulo
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../Componentes/UI";
import { usarArticulo } from "../Contexto/articuloContexto";
import { Textarea } from "../Componentes/UI/Textarea";
import { useForm } from "react-hook-form";

dayjs.extend(utc);

// Formato de articulos
export function ArticulosForm() {

  const { altaArt, consulArt, modArt } = usarArticulo();

  const navigate = useNavigate();

  const params = useParams();

  const {

    register,
    setValue,
    handleSubmit,
    formState: { errors }

  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        modArt(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        altaArt({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

    // Verificar que ningún campo está vacío
    if (data.nombre_articulo && data.codigo_barras_art && data.descripcion_articulo && data.date) {
      navigate("/articulos");
    }

    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadArt = async () => {
      if (params.id) {
        const articulo = await consulArt(params.id);
        setValue("nombre_articulo", articulo.nombre_articulo);
        setValue("codigo_barras_art", articulo.codigo_barras_art);
        setValue("descripcion_articulo", articulo.descripcion_articulo);
        setValue(
          "date",
          articulo.date ? dayjs(articulo.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", articulo.completed);
      }
    };

    loadArt();

  }, []);

  return (

    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="nombre_articulo"> Nombre de articulo </Label>
        <Input
          type="text"
          name="nombre_articulo"
          placeholder="nombre de articulo"
          {...register("nombre_articulo")}
          autoFocus
        />
        {errors.nombre_articulo && (
          <p className="text-red-500 text-xs italic"> Por favor escribe un nombre </p>
        )}

        <Label htmlFor="codigo_barras_art"> Código de barras </Label>
        <Textarea
          type="text"
          name="codigo_barras_art"
          id="codigo_barras_art"
          rows="3"
          placeholder="codigo de barras de articulo"
          {...register("codigo_barras_art")}
        ></Textarea>
        {errors.codigo_barras_art && (
          <p className="text-red-500 text-xs italic"> Por favor escribe un codigo de barras </p>
        )}

        <Label htmlFor="descripcion_articulo"> Descripción </Label>
        <Textarea
          type="text"
          name="descripcion_articulo"
          id="descripcion_articulo"
          rows="3"
          placeholder="descripción"
          {...register("descripcion_articulo")}
        ></Textarea>

        <Label htmlFor="date"> Fecha </Label>
        <Input type="date" name="date" {...register("date")} />
        <Button> Guardar </Button>
      </form>
    </Card>

  );

}