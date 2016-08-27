var status = require("http-status");
var personRepository = require("../Repositories/personRepository");

exports.getAll = getAll;
exports.getById = getById;
exports.getByName = getByName;
exports.post = post;
exports.put = put;
exports.delete = _delete;

function getAll(request, response) {
    var promise = personRepository.getAll();

    promise.then(function (people) {
        response.status(status.OK).json(people);
    }).catch(function (error) {
        response.sendStatus(static.INTERNAL_SERVER_ERROR);
    });
}

function getById(request, response) {
    var promise = personRepository.getById(request.params.id);

    promise.then(function (person) {
        response.status(status.OK).json(person);
    }).catch(function (error) {
        response.sendStatus(status.NOT_FOUND);
    });
}

function getByName(request, response) {
    var promise = personRepository.getByName(request.params.name);

    promise.then(function (person) {
        response.status(status.OK).json(person);
    });
}

function post(request, response) {
    var promise = personRepository.insert(request.body);

    promise.then(function (person) {
        response.status(status.CREATED).json(person);
    }).catch(function (error) {
        response.sendStatus(status.INTERNAL_SERVER_ERROR);
    });
}

function put(request, response) {
    var promise = personRepository.update(request.params.id, request.body);

    promise.then(function (person) {
        response.sendStatus(status.MOVED_PERMANENTLY);
    }).catch(function (error) {
        if (error) {
            if (error.notFound) {
                post(request, response, next);
            } else {
                response.sendStatus(status.INTERNAL_SERVER_ERROR);
            }
        }
    });
}

function _delete(request, response) {
    var promise = personRepository.delete(request.params.id);

    promise.then(function () {
        response.sendStatus(status.OK);
    }).catch(function () {
        response.sendStatus(status.INTERNAL_SERVER_ERROR);
    });
}