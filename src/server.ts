import "reflect-metadata";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as helmet from "koa-helmet";
import * as koaJwt from "koa-jwt";

import pagesController from "./controllers/pages";

const app: Koa = new Koa;
const secret: string = "secret";

app.use(helmet());

app.use(koaJwt({ secret }));

app.use(pagesController.routes());
app.use(pagesController.allowedMethods());

app.listen(3000);
