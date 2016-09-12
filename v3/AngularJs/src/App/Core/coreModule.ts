import * as angular from "angular";
import PeopleServer from "./Services/peopleService";
import config from "../../config";

export default angular.module("coreModule", [])
    .value("configValues", config)
    .factory(PeopleServer.name, PeopleServer);