import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import PeopleService from "../contracts/services/peopleService";

@Component({
    moduleId: __moduleName,
    selector: "contact-list",
    templateUrl: "./contactList.component.html"
})
export default class ContactListComponent implements OnInit {
    public people: Person[];

    constructor(
        private _peopleService: PeopleService,
        private _router: Router) {
    }

    edit(person: Person): void {
        this._router.navigate(["editContact", { id: person.id }]);
    }

    async delete(person: Person): Promise<void> {
        await this._peopleService.delete(person.id);

        let index = this.people.indexOf(person);
        this.people.splice(index, 1);
    }

    async ngOnInit(): Promise<void> {
        this.people = await this._peopleService.getAll();
    }
}
