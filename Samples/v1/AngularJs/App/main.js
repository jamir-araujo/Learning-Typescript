require.config({
    baseUrl: "/App",
    paths: {
        text: "../bower_components/requirejs-plugins/lib/text",
        json: "../bower_components/requirejs-plugins/src/json"
    }
});

require(["app"], function (app) {

    angular.element().ready(function () {
        angular.bootstrap(document, [app.name]);
    });
});