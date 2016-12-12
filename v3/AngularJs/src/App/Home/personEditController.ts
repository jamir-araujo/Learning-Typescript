import PeopleService from "../Core/Services/PeopleService";

export default class PersonEditController {
    private person: Person;

    static $inject = ["PeopleService", "$location", "$routeParams"];
    static className = "PersonEditController";
    constructor(private peopleService: PeopleService, private location: ng.ILocationService, private routeParams: ng.route.IRouteParamsService) {
        if (this.routeParams["id"]) {
            this.loadPerson(this.routeParams["id"]);
        }
    }

    public save(): void {
        let response: Promise<Person>;

        if (this.person.id) {
            response = this.peopleService.put(this.person);
        } else {
            response = this.peopleService.post(this.person);
        }

        response
            .then(person => this.location.path("/home"))
            .catch(error => alert("deu merda!"));
    }

    public loadPerson(id: string): void {
        this.peopleService.getById(id)
            .then(person => this.person = person)
            .catch(error => alert("deu merda!"));
    }
}