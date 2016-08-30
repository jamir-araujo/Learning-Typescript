define(function (require, exports) {
    homeController.name = "homeController";
    homeController.$inject = [];

    function homeController() {
        var vm = this;

        vm.loadList = loadList;
        vm.message = "isso é um teste";

        function loadList() {
            
        }

        loadList();
    }

    exports.default = homeController;
});