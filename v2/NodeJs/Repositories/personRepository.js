const fs = require("fs");
const UUID = require("uuid")

exports.getAll = getAll;
exports.getById = getById;
exports.getByName = getByName;
exports.insert = insert;
exports.update = update;
exports.delete = _delete;

var people = [];

function getAll() {
    return new Promise(function (resolve) {
        resolve(people);
    });
}

function getById(id) {
    return new Promise(function (resolve, reject) {
        let result = people.filter(function (item) {
            return item.id == id;
        });

        if (result.length != 0) {
            resolve(result[0]);
        } else {
            reject("Not Found");
        }
    });
}

function getByName(name) {
    return new Promise(function (resolve) {
        let result = people.filter(function (item) {
            return item.name.indexOf(name) == 0;
        });

        resolve(result);
    });
}

function insert(person) {
    return new Promise(function (resolve, reject) {
        person.id = UUID.generate();

        people.push(person);

        savePeopleList(people)
            .then(function () { resolve(person); })
            .catch(function (error) { reject(error) });
    });
}

function update(id, person) {
    return new Promise(function (resolve, reject) {
        let index = people.findIndex(person => person.id == id);
        if (index >= 0) {
            people[index] = person;

            savePeopleList(people)
                .then(function () { resolve(person); })
                .catch(function (error) { reject(error) });
        } else {
            reject({ notFound: true });
        }
    });
}

function _delete(id) {
    return new Promise(function (resolve, reject) {
        let index = people.findIndex(person => person.id == id);
        if (index >= 0) {
            people.splice(index, 1);

            savePeopleList(people)
                .then(function () { resolve(); })
                .catch(function (error) { reject(error) });
        } else {
            reject("Resource not found");
        }
    });
}

function savePeopleList(people) {
    return new Promise(function (resolve, reject) {
        fs.writeFile("Data/People.json", JSON.stringify(people, null, "  "), function (error) {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

function loadPeopleList(callBack) {
    return new Promise(function (resolve, reject) {
        fs.readFile("Data/People.json", function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

loadPeopleList().then(function (data) {
    people = data;
});