import "reflect-metadata";
import * as dotenv from "dotenv";

dotenv.config();

import * as Koa from "koa";
import * as Router from "koa-router";
import * as helmet from "koa-helmet";
import * as koaJwt from "koa-jwt";
import * as cors from "@koa/cors";
import * as bodyParser from "koa-bodyparser";
import { container, initServices } from "./inversify.config";
import { createConnection, Connection } from "typeorm";

import authFreeController from "./controllers/auth-free";
import PagesController from "./controllers/PagesController";

(async _ => {

    await initServices();
    const app: Koa = new Koa;
    const secret: string = process.env.APP_JWT_SECRET;

    app.use(bodyParser());
    app.use(helmet());

    app.use(authFreeController.routes());
    app.use(authFreeController.allowedMethods());

    // app.use(koaJwt({ secret }));

    let pagesController = container.resolve(PagesController);

    let pagesRouter = pagesController.getRouter();
    app.use(pagesRouter.routes());
    app.use(pagesRouter.allowedMethods());

    app.listen(process.env.APP_LISTEN_PORT);

})().catch(error => console.error(error));
