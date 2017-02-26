import { Container } from "inversify";
import { interfaces, TYPE } from 'inversify-express-utils';
import { makeLoggerMiddleware } from "inversify-logger-middleware";
import Contracts from "./Contracts/Contracts";
import PersonRepository from "./Repositories/personRepository";
import PersonController from "./Controllers/peopleController";
import * as fs from "fs";
import * as UUID from "node-uuid";
import * as status from "http-status";

export function getContainer(): Container {
    let container = new Container();

    if (process.env.NODE_ENV === 'development') {
        let logger = makeLoggerMiddleware();
        container.applyMiddleware(logger);
    }

    container
        .bind<IPersonRepository>(Contracts.Repository.IPersonRepository)
        .to(PersonRepository)
        .inSingletonScope();

    container
        .bind<Controller>(TYPE.Controller)
        .to(PersonController);

    container
        .bind<IFileService>(Contracts.Utils.IFileService)
        .toConstantValue(fs);

    container
        .bind<__NodeUUID.UUID>(Contracts.Utils.UUID)
        .toConstantValue(UUID);

    container
        .bind<HttpStatus>(Contracts.Utils.HttpStatus)
        .toConstantValue(status);

    return container;
}

interface Controller {

}