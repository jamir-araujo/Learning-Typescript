define(["require", "exports"], function (require, exports) {
    homeController.name = "homeController";
    homeController.$inject = ["peopleService"];

    function homeController(peopleService) {
        var vm = this;

        vm.loadList = loadList;
        vm.message = "isso é um teste";

        function loadList() {
            
        }

        loadList();
    }

    exports.default = homeController;
});