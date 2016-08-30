define(["exports", "Core/Services/peopleService"], function (exports, peopleService) {
    var name = "coreModule";

    var module = angular.module(name, [])
        .value("configValues", { serverUrl: "http://localhost:8080" })
        .service(peopleService.default.name, peopleService.default);

    exports.name = name;
});