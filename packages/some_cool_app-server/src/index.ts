import Koa, { Context } from "koa";
import logger from "koa-logger";
import KoaRouter from "@koa/router";

const app = new Koa();
const router = new KoaRouter();

app.use(logger());

function main(ctx: Context) {
  ctx.body = `
     <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <title>React SSR</title>
       </head>
       <body>
         <div id="app">${`hello`}</div>
         <script type="text/javascript" src="/bundle.js"></script>
       </body>
     </html>
   `;
}

router.get(/.*/, main);

app.use(router.routes());

app.listen(3002);
