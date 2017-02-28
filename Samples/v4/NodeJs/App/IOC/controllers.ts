import { ContainerModule } from "inversify";
import { interfaces, TYPE } from 'inversify-express-utils';
import PersonController from "../Controllers/peopleController";

var module = new ContainerModule((bind, unbind, isBound, rebind) => {

    bind<Controller>(TYPE.Controller)
    .to(PersonController);
});

export default module;

interface Controller {

}
