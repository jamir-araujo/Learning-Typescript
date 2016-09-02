define(function () {
    personEditController.name = "personEditController";
    personEditController.$inject = ["peopleService", "$location", "$routeParams"];

    function personEditController(peopleService, $location, $routeParams) {
        var vm = this;
    }

    return personEditController;
});