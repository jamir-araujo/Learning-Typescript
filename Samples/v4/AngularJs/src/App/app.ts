import HomeController from "./Home/HomeModule";

export default angular.module("ContactList", ["ngRoute", HomeController.name])
    .config(($locationProvider: angular.ILocationProvider, $routeProvider: angular.route.IRouteProvider) => {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({ redirectTo: "/home" });
    });