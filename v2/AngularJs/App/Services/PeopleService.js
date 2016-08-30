define(["exports"], function (exports) {
    PeopleService.$inject = ["$http", "configValues"];

    function PeopleService($http, configValues) {
        var baseUrl = configValues.serverUrl;

        this.getAll = function () {
            return $http.get(baseUrl + "/api/people");
        }

        this.getByName = function (name) {
            return $http.get(baseUrl + "/api/people/" + name);
        }

        this.getById = function (id) {
            return $http.get(baseUrl + "/api/person/" + id);
        }

        this.post = function (person) {
            return $http.post(baseUrl + "/api/person", person);
        }

        this.put = function (person) {
            return $http.put(baseUrl + "/api/person/" + person.id, person);
        }

        this.delete = function (id) {
            return $http.delete(baseUrl + "/api/person/" + id);
        }
    }
})