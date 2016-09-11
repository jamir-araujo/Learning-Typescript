define(function () {
    homeController.name = "homeController";
    homeController.$inject = ["peopleService", "$location"];

    function homeController(peopleService, $location) {
        var vm = this;

        vm.people = [];
        vm.search = "";

        vm.edit = edit;
        vm.delete = _delete;
        vm.createNew = createNew;
        vm.searchChange = searchChange;

        function loadList() {
            peopleService.getAll()
                .then(function (people) {
                    vm.people = people;
                });
        }

        function edit(person) {
            $location.path("/person/" + person.id);
        }

        function _delete(person) {
            peopleService.delete(person.id)
                .then(function () {
                    var index = vm.people.indexOf({ id: person.id });
                    vm.people.splice(index, 1);
                }).catch(function (error) {
                    alert("deu merda!");
                });
        }

        function createNew() {
            $location.path("/person");
        }

        function searchChange() {
            peopleService.getByName(vm.search)
                .then(function (people) { 
                    vm.people = people;
                })
                .catch(function (error) {
                    alert("deu merda!");
                 });
        }

        loadList();
    }

    return homeController;
});