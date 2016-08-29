define(function (main) {
    "use strict"

    angular.module("Contact-List", ["ngAnimate", "ngRoute", "ngResource"])
        .config(function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.otherwise({ redirectTo: "/Home" });
        });
});