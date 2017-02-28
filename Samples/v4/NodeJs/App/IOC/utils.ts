import { ContainerModule } from "inversify";
import Contracts from "../Contracts/Contracts";
import { IFileServiceSymbol, IFileService } from "../Contracts/Utils/IFileService";
import * as fs from "fs";
import * as UUID from "node-uuid";
import * as status from "http-status";

var container = new ContainerModule((bind, unbind, isBound, rebind) => {

    bind<IFileService>(IFileServiceSymbol)
        .toConstantValue(fs);

    bind<__NodeUUID.UUID>(Contracts.Libs.UUIDSymbol)
        .toConstantValue(UUID);

    bind<HttpStatus>(Contracts.Libs.HttpStatusSymbol)
        .toConstantValue(status);
});

export default container;