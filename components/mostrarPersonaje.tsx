import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/type.ts";

type Data = {
  data :Character
}

const mostrarPersonaje: FunctionalComponent<Data> = ({ data }) => { 
  return (
    <div></div>
  )
}