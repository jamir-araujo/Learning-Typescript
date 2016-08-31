define(["exports", "Core/coreModule", "Home/homeController", "Core/Services/peopleService"], function (exports, coreModule, homeController, peopleService) {
    var name = "homeModule";

    angular.module(name, ["ngRoute", coreModule.name])
        .controller(homeController.name, homeController)
        .config(function ($routeProvider) {
            $routeProvider.when("/Home", {
                controllerAs: "vm",
                controller: homeController.name,
                templateUrl: "App/Home/home.html",
                name: "HomePage"
            });
        });

    exports.name = name
});