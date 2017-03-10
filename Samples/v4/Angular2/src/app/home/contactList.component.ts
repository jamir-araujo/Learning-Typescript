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
    public searchText: string = "";

    constructor(
        private _peopleService: PeopleService,
        private _router: Router) {
    }

    async search(): Promise<void> {
        this.people = await this._peopleService.getByName(this.searchText);
    }

    async edit(person: Person): Promise<void> {
        await this._router.navigateByUrl(`editContact/${person.id}`);
    }

    async new(): Promise<void> {
        await this._router.navigate(["newContact"]);
    }

    delete(event: any, person: Person): void {
        this._peopleService.delete(person.id)
            .then(() => {
                let index = this.people.indexOf(person);
                this.people.splice(index, 1);
            });
    }

    async ngOnInit(): Promise<void> {
        this.people = await this._peopleService.getAll();
    }
}
