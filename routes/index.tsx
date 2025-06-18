import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import MostrarCharacters from "../islands/mostrarCharacters.tsx";
import { getPersonajes } from "../utils/api.ts";
import { Character } from "../utils/type.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext) => {
    const personajes = await getPersonajes();
    return ctx.render(personajes);
  },
};

export default function Home(props: PageProps<Character[]>) {
  return (
    <div>
      <MostrarCharacters data={props.data} />
    </div>
  );
}
