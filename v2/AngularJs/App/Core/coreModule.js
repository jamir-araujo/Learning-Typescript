define(["exports", "Core/Services/peopleService"], function (exports, peopleService) {

    return angular.module("coreModule", [])
        .value("configValues", { serverUrl: "http://localhost:8080" })
        .factory(peopleService.name, peopleService);
});