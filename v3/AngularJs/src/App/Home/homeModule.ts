import * as angular from "angular";
import coreModule from "Core/coreModule";
import HomeController from "homeController";
import PersonEditController from "personEditController";

export default angular.module("homeModule", ["ngRoute", coreModule.name])
    .controller(HomeController.name, HomeController)
    .controller(PersonEditController.name, PersonEditController)
    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider.when("/home", {
            controllerAs: "vm",
            controller: HomeController.name,
            templateUrl: "App/Home/home.html",
            name: "home"
        });
        $routeProvider.when("/person", {
            controllerAs: "vm",
            controller: PersonEditController.name,
            templateUrl: "App/Home/personEdit.html",
            name: "personEdit"
        });
        $routeProvider.when("/person/:id", {
            controllerAs: "vm",
            controller: PersonEditController.name,
            templateUrl: "App/Home/personEdit.html",
            name: "personEdit"
        });
    });