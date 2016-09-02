define(function () {
    homeController.name = "homeController";
    homeController.$inject = ["peopleService"];

    function homeController(peopleService) {
        var vm = this;

        vm.people = [];

        vm.edit = edit;
        vm.delete = _delete;

        function loadList() {
            peopleService.getAll()
                .then(function (people) {
                    vm.people = people;
                });
        }

        function edit(person) {

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

        loadList();
    }

    return homeController;
});