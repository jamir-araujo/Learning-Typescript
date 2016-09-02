define([
    "exports",
    "Core/coreModule",
    "Home/homeController",
    "Home/personEditController",
    "Core/Services/peopleService"],
    function (exports,
        coreModule,
        homeController,
        personEditController,
        peopleService) {

        return angular.module("homeModule", ["ngRoute", coreModule.name])
            .controller(homeController.name, homeController)
            .controller(personEditController.name, personEditController)
            .config(function ($routeProvider) {
                $routeProvider.when("/home", {
                    controllerAs: "vm",
                    controller: homeController.name,
                    templateUrl: "App/Home/home.html",
                    name: "home"
                });
                $routeProvider.when("/person", {
                    controllerAs: "vm",
                    controller: personEditController.name,
                    templateUrl: "App/Home/personEdit.html",
                    name: "personEdit"
                });
                $routeProvider.when("/person/:id", {
                    controllerAs: "vm",
                    controller: personEditController.name,
                    templateUrl: "App/Home/personEdit.html",
                    name: "personEdit"
                });
            });
    });