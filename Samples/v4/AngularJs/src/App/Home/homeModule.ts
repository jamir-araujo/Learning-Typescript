import coreModule from "Core/coreModule";
import HomeController from "./homeController";
import PersonEditController from "./personEditController";

export default angular.module("homeModule", ["ngRoute", coreModule.name])
    .controller(HomeController.className, HomeController)
    .controller(PersonEditController.className, PersonEditController)
    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider.when("/home", {
            controllerAs: "vm",
            controller: HomeController.className,
            templateUrl: "App/Home/home.html",
            name: "home"
        });
        $routeProvider.when("/person", {
            controllerAs: "vm",
            controller: PersonEditController.className,
            templateUrl: "App/Home/personEdit.html",
            name: "personEdit"
        });
        $routeProvider.when("/person/:id", {
            controllerAs: "vm",
            controller: PersonEditController.className,
            templateUrl: "App/Home/personEdit.html",
            name: "personEdit"
        });
    });