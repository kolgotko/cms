import { Container, inject, injectable } from "inversify";
import { createConnection, Connection } from "typeorm";
import * as Router from "koa-router";

export const container = new Container();

export async function initServices() {

    let connection: Connection = await createConnection();

    container.bind<Connection>("Connection").toConstantValue(connection);

}
