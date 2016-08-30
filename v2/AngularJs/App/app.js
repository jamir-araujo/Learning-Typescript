define(["exports", "Home/homeModule"], function (exports, homeModule) {

    var name = "ContactList";

    angular.module(name, ["ngRoute", homeModule.name])
        .config(function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.otherwise({ redirectTo: "/Home" });
        });

    exports.name = name;
});