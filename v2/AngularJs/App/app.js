define(["exports", "Home/homeModule"], function (exports, homeModule) {

    var moduleName = "ContactList";

    angular.module(moduleName, ["ngRoute", homeModule.moduleName])
        .config(function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.otherwise({ redirectTo: "/Home" });
        });

    exports.moduleName = moduleName;
});