define(["exports", "Home/homeModule"], function (exports, homeModule) {

    return angular.module("ContactList", ["ngRoute", homeModule.name])
        .config(function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.otherwise({ redirectTo: "/Home" });
        });
});