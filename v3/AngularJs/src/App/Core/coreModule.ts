import PeopleServer from "./Services/peopleService";
import config from "../../config";

export default angular.module("coreModule", [])
    .value("configValues", config)
    .service(PeopleServer.className, PeopleServer);