require.config({
    
});

require(["app"], function (app) {

    angular.element().ready(function () {
        angular.bootstrap(document, [app.name]);
    });
});