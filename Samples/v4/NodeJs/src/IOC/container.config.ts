import { Container } from "inversify";
import { interfaces, TYPE } from 'inversify-express-utils';
import { makeLoggerMiddleware } from "inversify-logger-middleware";
import utils from "./utils";
import repositories from "./repositories";
import controllers from "./controllers";

let container = new Container();

if (process.env.NODE_ENV === 'development') {
    let logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

container.load(utils, repositories, controllers);

export default container;
