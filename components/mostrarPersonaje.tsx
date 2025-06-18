import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/type.ts";

type Data = {
  data: Character;
};

const MostrarPersonaje: FunctionalComponent<Data> = ({ data }) => {
  console.log(data);
  return (
    <div class="card">
      <ul>
        <a href={`/characters/${data.id}`}>
          <img src={data.image}></img>
        </a>
        <li>
          {data.name}
          {" "}
        </li>
        <li>Estado: {data.alive === true ? "Alive" : ""}</li>
        <li>Casa: {data.house}</li>
        <a href="/">
          <button type="button">Volver</button>
        </a>
      </ul>
    </div>
  );
};
export default MostrarPersonaje;
