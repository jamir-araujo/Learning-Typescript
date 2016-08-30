define(["exports", "Home/homeModule", "Services/peopleService"], function (exports, homeModule, peopleService) {

    var moduleName = "ContactList";

    angular.module(moduleName, ["ngRoute", homeModule.moduleName])
        .value("configValues", { serverUrl: "http://localhost:8080" })
        .service(peopleService.default.name, peopleService.default)
        .config(function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.otherwise({ redirectTo: "/Home" });
        });

    exports.moduleName = moduleName;
});