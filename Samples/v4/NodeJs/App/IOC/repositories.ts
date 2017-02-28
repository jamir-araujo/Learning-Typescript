import { ContainerModule } from "inversify";
import { IPersonRepositorySymbol, IPersonRepository } from "../Contracts/Repositories/IPersonRepository";
import PersonRepository from "../Repositories/personRepository";

var container = new ContainerModule((bind, unbind, isBound, rebind) => {

    bind<IPersonRepository>(IPersonRepositorySymbol)
        .to(PersonRepository)
        .inSingletonScope();
});

export default container;
