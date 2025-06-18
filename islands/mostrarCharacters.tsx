import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/type.ts";
import { useEffect, useState } from "preact/hooks";

type Data = { data: Character[] };

const MostrarCharacters: FunctionalComponent<Data> = ({ data }) => {
  const [numfav, setNumfav] = useState<string[]>([]);
  const cambiarEstado = (p: Character) => {
    const cookie = document.cookie.split("; ").find((e) =>
      e.startsWith("favoritos=")
    )?.split("=")[1];
    const contenedor: Character[] = [];
    if (!cookie) {
      contenedor.push(p);
      document.cookie = `favoritos=${
        encodeURIComponent(JSON.stringify(contenedor))
      }; Path=/;`;
      setNumfav([p.id]);
    } else {
      const aux: Character[] = JSON.parse(decodeURIComponent(cookie));
      if (aux.find((e) => e.id === p.id)) {
        const quitar = aux.filter((e) => e.id !== p.id);
        document.cookie = `favoritos=${
          encodeURIComponent(JSON.stringify(quitar))
        }; Path=/;`;
        const a = numfav;
        const b = a.filter((o) => o !== p.id);
        setNumfav(b);
      } else {
        const aux2: Character[] = JSON.parse(decodeURIComponent(cookie));
        aux2.push(p);
        document.cookie = `favoritos=${
          encodeURIComponent(JSON.stringify(aux2))
        }; Path=/;`;
        setNumfav((prev) => [...prev, p.id]);
      }
    }
  };

  useEffect(() => {
    const cookie = document.cookie.split("; ").find((e) =>
      e.startsWith("favoritos=")
    )?.split("=")[1];
    if (cookie) {
      const personajes: Character[] = JSON.parse(decodeURIComponent(cookie));
      setNumfav(personajes.map((p) => p.id));
    }
  });
  return (
    <div>
      <ul>
        {data.map((p: Character) => (
          <li>
            <ul>
              <a href={`/characters/${p.id}`}>
                <img src={p.image}></img>
              </a>
              <li>
                {p.name}{" "}
                <img
                  width={50}
                  onClick={() => cambiarEstado(p)}
                  src={numfav.includes(p.id)
                    ? "estrella_rellena.png"
                    : "estrella_vacia.png"}
                />
              </li>
              <li>Casa: {p.house}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarCharacters;
