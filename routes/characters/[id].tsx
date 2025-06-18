import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import MostrarPersonaje from "../../components/mostrarPersonaje.tsx";
import { getEspecificPersonaje } from "../../utils/api.ts";
import { Character } from "../../utils/type.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = req.url.toString();
    const id = url.slice(url.length - 36, url.length);
    const personaje: Character = await getEspecificPersonaje(id);
    return ctx.render(personaje);
  },
};

const Page = (props: PageProps<Character>) => (
  <MostrarPersonaje data={props.data} />
);
export default Page;
