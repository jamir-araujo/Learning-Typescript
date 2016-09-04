define(function () {
    peopleService.$inject = ["$http", "configValues"];
    peopleService.name = "peopleService";

    function peopleService($http, configValues) {
        var baseUrl = configValues.serverUrl;

        return {
            getAll: getAll,
            getById: getById,
            getByName: getByName,
            post: post,
            put: put,
            delete: _delete,
        };

        function getAll() {
            return $http.get(baseUrl + "/api/people")
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http.get(baseUrl + "/api/person/" + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function getByName(name) {
            return $http.get(baseUrl + "/api/people/" + name)
                .then(function (response) {
                    return response.data;
                });
        }

        function post(person) {
            return $http.post(baseUrl + "/api/person", person)
                .then(function (response) {
                    return response.data;
                });
        }

        function put(person) {
            return $http.put(baseUrl + "/api/person/" + person.id, person)
                .then(function (response) {
                    return response.data;
                });
        }

        function _delete(id) {
            return $http.delete(baseUrl + "/api/person/" + id)
                .then(function (response) {
                    return response.data;
                });
        }
    }

    return peopleService;
})