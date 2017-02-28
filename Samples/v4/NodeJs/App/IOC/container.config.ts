import { Container } from "inversify";
import { interfaces, TYPE } from 'inversify-express-utils';
import { makeLoggerMiddleware } from "inversify-logger-middleware";
import utils from "./utils";
import repositories from "./repositories";
import PersonController from "../Controllers/peopleController";

let container = new Container();

if (process.env.NODE_ENV === 'development') {
    let logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

container.load(utils, repositories);

container
    .bind<Controller>(TYPE.Controller)
    .to(PersonController);

export default container;

interface Controller {

}