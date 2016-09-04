define(function () {
    personEditController.name = "personEditController";
    personEditController.$inject = ["peopleService", "$location", "$routeParams"];

    function personEditController(peopleService, $location, $routeParams) {
        var vm = this;
        vm.person = {};

        vm.save = save;

        function save() {
            var person = vm.person;
            var response = {};
            if (person.id) {
                response = peopleService.put(person);
            } else {
                response = peopleService.post(person);
            }

            response.then(function (person) {
                $location.path("/home");
            }).catch(function (error) {
                alert("Deu Merda!");
            });
        }

        function loadPerson(id) {
            peopleService.getById(id)
                .then(function (person) {
                    vm.person = person;
                })
                .catch(function (error) {

                });
        }

        if ($routeParams.id) {
            loadPerson($routeParams.id);
        }
    }

    return personEditController;
});