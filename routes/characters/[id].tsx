import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = req.url.toString();
    console.log(url)
    return ctx.render();
  },
};

const Page = () => {
};
