import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import PeopleService from "../contracts/services/peopleService";

@Component({
    moduleId: __moduleName,
    selector: "edit-contact",
    templateUrl: "./editContact.component.html"
})
export default class EditContactComponent implements OnInit {
    private readonly EMPTY_PERSON: Person = { id: null, name: "", phone: "" };

    person: Person;

    constructor(
        private _peopleService: PeopleService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
        this.person = this.EMPTY_PERSON;
    }

    async save(): Promise<void> {
        if (this.person.id) {
            this.person = await this._peopleService.put(this.person.id, this.person);
        } else {
            this.person = await this._peopleService.post(this.person);
        }

        await this._router.navigate([""]);
    }

    async ngOnInit(): Promise<void> {
        let id = this._activatedRoute.snapshot.params.id;
        if (id) {
            this.person = await this._peopleService.getById(id);
        } else {
            this.person = this.EMPTY_PERSON;
        }
    }
}
