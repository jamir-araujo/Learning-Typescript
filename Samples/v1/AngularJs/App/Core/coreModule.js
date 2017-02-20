define(["exports", "Core/Services/peopleService", "json!../../config.json"], function (exports, peopleService, config) {

    return angular.module("coreModule", [])
        .value("configValues", config)
        .factory(peopleService.name, peopleService);
});