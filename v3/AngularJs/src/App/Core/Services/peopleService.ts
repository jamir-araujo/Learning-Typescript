import {IHttpService, IPromise} from "angular";

export default class PeopleService {
    private baseUrl: string;

    static $inject = ["$http", "configValues"];
    static name = "PeopleService";
    constructor(private $http: IHttpService, private config: any) {
        this.baseUrl = this.config.serverUrl;
    }

    public getAll(): IPromise<Person[]> {
        return this.$http.get<Person[]>(this.baseUrl + "/api/people")
            .then(response => response.data);
    }

    public getById(id: string): IPromise<Person> {
        return this.$http.get<Person>(this.baseUrl + "/api/person/" + id)
            .then(response => response.data);
    }

    public getByName(name: string): IPromise<Person[]> {
        return this.$http.get<Person[]>(this.baseUrl + "/api/people/" + name)
            .then(response => response.data);
    }

    public post(person: Person): IPromise<Person> {
        return this.$http.post<Person>(this.baseUrl + "/api/person", person)
            .then(response => response.data);
    }

    public put(person: Person): IPromise<Person> {
        return this.$http.put<Person>(this.baseUrl + "/api/person/" + person.id, person)
            .then(response => response.data);
    }

    public delete(id: string): IPromise<Person> {
        return this.$http.delete<Person>(this.baseUrl + "/api/person/" + id)
            .then(response => response.data);
    }
}