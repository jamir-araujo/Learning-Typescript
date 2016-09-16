export default class PeopleService {
    private baseUrl: string;

    static $inject = ["$http", "configValues"];
    static className = "PeopleService";
    constructor(private $http: ng.IHttpService, private config: any) {
        this.baseUrl = this.config.serverUrl;
    }

    public getAll(): ng.IPromise<Person[]> {
        return this.$http.get<Person[]>(this.baseUrl + "/api/people")
            .then(response => response.data);
    }

    public getById(id: string): ng.IPromise<Person> {
        return this.$http.get<Person>(this.baseUrl + "/api/person/" + id)
            .then(response => response.data);
    }

    public getByName(name: string): ng.IPromise<Person[]> {
        return this.$http.get<Person[]>(this.baseUrl + "/api/people/" + name)
            .then(response => response.data);
    }

    public post(person: Person): ng.IPromise<Person> {
        return this.$http.post<Person>(this.baseUrl + "/api/person", person)
            .then(response => response.data);
    }

    public put(person: Person): ng.IPromise<Person> {
        return this.$http.put<Person>(this.baseUrl + "/api/person/" + person.id, person)
            .then(response => response.data);
    }

    public delete(id: string): ng.IPromise<Person> {
        return this.$http.delete<Person>(this.baseUrl + "/api/person/" + id)
            .then(response => response.data);
    }
}