import * as Router from "koa-router";

const router: Router = new Router({
    prefix: "/pages",
    strict: true,
});

router.use(async (ctx, next) => {
    console.log(ctx.state);
    await next();
})

router.get("/", (ctx, next) => {

    ctx.body = "root pages";

});

router.get("/:id", (ctx, next) => {

    ctx.body = "page";

});

router.get("/:id/", (ctx, next) => {

    ctx.body = "sub pages of page";

});

router.post("/:id?", (ctx, next) => {

    ctx.body = "create page";

});

router.put("/:id", (ctx, next) => {

    ctx.body = "update page";

});

router.patch("/:id", (ctx, next) => {

    ctx.body = "patch page";

});

router.delete("/:id", (ctx, next) => {

    ctx.body = "delete page";

});

export default router;
