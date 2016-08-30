define(["exports", "Home/homeController"], function (exports, homeController) {
    var moduleName = "homeModule";

    angular.module(moduleName, [])
        .controller(homeController.default.name, homeController.default)
        .config(function ($routeProvider) {
            $routeProvider.when("/Home", {
                controllerAs: "vm",
                controller: homeController.default,
                templateUrl: "App/Home/home.html",
                name: "HomePage"
            });
        });

    exports.moduleName = moduleName
});