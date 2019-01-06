import * as Router from "koa-router";

const router = new Router({
    prefix: "/auth-free",
    strict: true,
});

router.post("/", (ctx, next) => {

    console.log(ctx.request.body);
    ctx.body = ctx.request.body;

});

export default router;
