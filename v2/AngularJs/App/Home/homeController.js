define(function (require, exports) {
    homeController.name = "homeController";
    homeController.$inject = [];

    function homeController() {
        var vm = this;

        vm.updateList = updateList;
        vm.message = "isso é um teste";

        function updateList() {
            
        }
    }

    exports.default = homeController;
});