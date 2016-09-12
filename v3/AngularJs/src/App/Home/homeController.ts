import {ILocationService} from "angular";
import PeopleService from "../Core/Services/PeopleService";

export default class HomeController {
    private people: Person[];
    private search: string;

    static $inject = ["PeopleService", "$location"];
    static name = "HomeController";
    constructor(private peopleService: PeopleService, private location: ILocationService) {

    }

    public loadList(): void {
        this.peopleService.getAll()
            .catch(people => this.people = people);
    }

    public edit(person: Person): void {
        this.location.path("/person/" + person.id);
    }

    public delete(person: Person): void {
        this.peopleService.delete(person.id)
            .then(person => {
                let index = this.people.indexOf(<Person>{ id: person.id })
                this.people.splice(index, 1);
            })
            .catch(error => alert("deu merda!"));
    }

    public createNew(): void {
        this.location.path("/person");
    }

    public searchChange(): void {
        this.peopleService.getByName(this.search)
            .then(people => this.people = people)
            .catch(error => alert("deu merda!"));
    }
}