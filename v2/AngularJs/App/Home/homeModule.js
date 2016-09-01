define(["exports", "Core/coreModule", "Home/homeController", "Core/Services/peopleService"], function (exports, coreModule, homeController, peopleService) {

    return angular.module("homeModule", ["ngRoute", coreModule.name])
        .controller(homeController.name, homeController)
        .config(function ($routeProvider) {
            $routeProvider.when("/Home", {
                controllerAs: "vm",
                controller: homeController.name,
                templateUrl: "App/Home/home.html",
                name: "HomePage"
            });
        });
});