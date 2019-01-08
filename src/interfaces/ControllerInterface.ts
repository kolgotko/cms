import * as Router from "koa-router";

export default interface ControllerInterface {
    getRouter(): Router;
}
