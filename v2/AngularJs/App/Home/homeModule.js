define(["exports", "Home/homeController", "Core/coreModule"], function (exports, homeController, coreModule) {
    var name = "homeModule";

    angular.module(name, [coreModule.name])
        .controller(homeController.default.name, homeController.default)
        .config(function ($routeProvider) {
            $routeProvider.when("/Home", {
                controllerAs: "vm",
                controller: homeController.default,
                templateUrl: "App/Home/home.html",
                name: "HomePage"
            });
        });

    exports.name = name
});