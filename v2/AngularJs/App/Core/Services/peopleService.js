define(function () {
    peopleService.$inject = ["$http", "configValues"];
    peopleService.name = "peopleService";

    function peopleService($http, configValues) {
        var baseUrl = configValues.serverUrl;

        return {
            getAll: getAll,
            getByName: getByName,
            getById: getByName,
            post: post,
            put: put,
            delete: _delete,
        };

        function getAll() {
            return $http.get(baseUrl + "/api/people");
        }

        function getByName(name) {
            return $http.get(baseUrl + "/api/people/" + name);
        }

        function getById(id) {
            return $http.get(baseUrl + "/api/person/" + id);
        }

        function post(person) {
            return $http.post(baseUrl + "/api/person", person);
        }

        function put(person) {
            return $http.put(baseUrl + "/api/person/" + person.id, person);
        }

        function _delete(id) {
            return $http.delete(baseUrl + "/api/person/" + id);
        }
    }

    return peopleService;
})