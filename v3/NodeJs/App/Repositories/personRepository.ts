import * as fs from "fs";
import * as UUID from "node-uuid";

var people: Person[];

export function getAll(): Promise<Person[]> {
    return new Promise((resolve) => resolve(people));
}

export function getById(id: string): Promise<Person> {
    return new Promise((resolve, reject) => {
        let results = people.filter(item => item.id == id);

        if (results.length != 0) {
            resolve(results[0]);
        } else {
            reject("Not Found");
        }
    });
}

export function getByName(name: string): Promise<Person[]> {
    return new Promise((resolve) => {
        let results = people.filter(person => {
            let personName = person.name.toUpperCase();
            return personName.indexOf(name.toUpperCase()) >= 0;
        });

        resolve(results);
    });
}

export function insert(person: Person): Promise<Person> {
    return new Promise((resolve, reject) => {
        person.id = UUID.v4();

        people.push(person);

        savePeopleList(people)
            .then(function () { resolve(person); })
            .catch(function (error) { reject(error) });
    });
}

export function update(id: string, person: Person): Promise<Person> {
    return new Promise((resolve, reject) => {
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

export function deletePerson(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
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


function savePeopleList(people: Person[]): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.writeFile("Data/People.json", JSON.stringify(people, null, "  "), (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

function loadPeopleList(): Promise<Person[]> {
    return new Promise<Person[]>((resolve, reject) => {
        fs.readFile("Data/People.json", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(<any>data));
            }
        });
    });
}

loadPeopleList().then((data) => {
    people = data;
});