define(function (require, exports) {
    homeController.name = "homeController";
    homeController.$inject = [];

    function homeController() {
        var vm = this;

        vm.updateList = updateList;

        function updateList() {

        }
    }

    exports.default = homeController;
});