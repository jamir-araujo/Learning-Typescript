import PeopleServer from "./Services/peopleService";
import HttpService from "./Services/httpService";
import config from "../../config";

export default angular.module("coreModule", [])
    .value("configValues", config)
    .service(HttpService.className, HttpService)
    .service(PeopleServer.className, PeopleServer);