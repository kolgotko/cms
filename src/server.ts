import "reflect-metadata";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as helmet from "koa-helmet";
import * as koaJwt from "koa-jwt";
import * as bodyParser from "koa-bodyparser";

import authFreeController from "./controllers/auth-free";
import pagesController from "./controllers/pages";

const app: Koa = new Koa;
const secret: string = "secret";

app.use(bodyParser());
app.use(helmet());

app.use(authFreeController.routes());

app.use(koaJwt({ secret }));

app.use(pagesController.routes());
app.use(pagesController.allowedMethods());

app.listen(3030);
