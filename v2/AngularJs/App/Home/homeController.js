define(function () {
    homeController.name = "homeController";
    homeController.$inject = ["peopleService"];

    function homeController(peopleService) {
        var vm = this;

        vm.loadList = loadList;
        vm.message = "isso é um teste";
        vm.people = [];

        function loadList() {
            peopleService.getAll()
                .then(function (people) {
                    vm.people = people;
                });
        }

        loadList();
    }

    return homeController;
});