import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import MostrarFavorites from "../islands/mostrarFavorites.tsx";
import { getPersonajesFavoritos } from "../utils/api.ts";
import { Character } from "../utils/type.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const cookie = req.headers.get("cookie")?.split("; ").find((e) =>
      e.startsWith("favoritos=")
    )?.split("=")[1];
    if (cookie) {
      const aux: Character[] = JSON.parse(decodeURIComponent(cookie));
      const aux2: string[] = aux.map((p) => p.id);

      const favoritos = await getPersonajesFavoritos(aux2);
      console.log(favoritos);
      return ctx.render(favoritos);
    } else {
      const nada: Character[] = [];
      return ctx.render(nada);
    }
  },
};

const Page = (props: PageProps<Character[]>) => (
  <MostrarFavorites data={props.data} />
);

export default Page;
