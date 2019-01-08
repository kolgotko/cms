import { injectable, inject } from "inversify";
import * as Router from "koa-router";
import { Connection } from "typeorm";
import ControllerInterface from "../interfaces/ControllerInterface";

import Page from "../entities/Page";

@injectable()
export default class PagesController implements ControllerInterface {

    private connection: Connection;

    constructor(
        @inject("Connection") connection: Connection
    ) {

        this.connection = connection;

    }

    public getRouter(): Router {

        let router = new Router({
            prefix: "/pages",
            strict: true,
        });

        router.get("/", this.getRootPages);

        router.get("/:id", this.getPage);

        router.get("/:id/", this.getSubPagesOfPage);

        router.post("/", this.createPage.bind(this));

        router.put("/:id", this.updatePage);

        router.patch("/:id", this.patchPage);

        router.delete("/:id", this.deletePage);

        return router;

    }

    public getRootPages(ctx, next) {

        ctx.body = "root pages";

    }

    public getPage(ctx, next) {

        ctx.body = "page";

    }

    public getSubPagesOfPage(ctx, next) {

        ctx.body = "sub pages of page";

    }

    public async createPage(ctx, next) {

        let repository = this.connection.getRepository(Page);
        let page = new Page;

        page.title = "title";
        page.text = "text";
        page.visible = true;

        await repository.save(page);
        ctx.body = "create page";

    }

    public updatePage(ctx, next) {

        ctx.body = "upate page";

    }

    public patchPage(ctx, next) {

        ctx.body = "patch page";

    }

    public deletePage(ctx, next) {

        ctx.body = "delete page";

    }

}
