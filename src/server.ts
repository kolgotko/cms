import "reflect-metadata";
import * as dotenv from "dotenv";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as helmet from "koa-helmet";
import * as koaJwt from "koa-jwt";
import * as bodyParser from "koa-bodyparser";

dotenv.config();

import authFreeController from "./controllers/auth-free";
import pagesController from "./controllers/pages";

const app: Koa = new Koa;
const secret: string = process.env.APP_JWT_SECRET;

app.use(bodyParser());
app.use(helmet());

app.use(authFreeController.routes());
app.use(authFreeController.allowedMethods());

app.use(koaJwt({ secret }));

app.use(pagesController.routes());
app.use(pagesController.allowedMethods());

app.listen(process.env.APP_LISTEN_PORT);
