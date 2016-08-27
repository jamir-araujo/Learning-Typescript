import * as fs from "fs";

var people: Person[];

export function getAll(): Promise<Person[]> {
    return new Promise(function (resolve) {
        resolve(people);
    });
}

export function getById(id: number): Promise<Person> {
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

export function getByName(name: string): Promise<Person[]> {
    return new Promise(function (resolve) {
        let result = people.filter(function (item) {
            return item.name.indexOf(name) == 0;
        });

        resolve(result);
    });
}

export function insert(person: Person): Promise<Person> {
    return new Promise(function (resolve, reject) {
        people.push(person);

        savePeopleList(people)
            .then(function () { resolve(person); })
            .catch(function (error) { reject(error) });
    });
}

export function update(id: number, person: Person): Promise<Person> {
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

export function deletePerson(id: number): Promise<void> {
    return new Promise<void>(function (resolve, reject) {
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


function savePeopleList(people): Promise<any> {
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

function loadPeopleList(): Promise<Person[]> {
    return new Promise<Person[]>(function (resolve, reject) {
        fs.readFile("Data/People.json", function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(<any>data));
            }
        });
    });
}

loadPeopleList().then(function (data) {
    people = data;
});