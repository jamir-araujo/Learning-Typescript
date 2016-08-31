define(["exports", "Core/Services/peopleService"], function (exports, peopleService) {
    var name = "coreModule";

    angular.module(name, [])
        .value("configValues", { serverUrl: "http://localhost:8080" })
        .factory(peopleService.name, peopleService);

    exports.name = name;
});