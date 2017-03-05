import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import PeopleService from "../contracts/services/peopleService";

@Component({
    moduleId: __moduleName,
    selector: "edit-contact",
    templateUrl: "./editContact.component.html"
})
export default class EditContactComponent implements OnInit {
    contact: Person;

    constructor(
        private _peopleService: PeopleService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
    }

    async ngOnInit(): Promise<void> {
        this.contact = await this._activatedRoute.params
        .switchMap(async (params) => await this._peopleService.getById(params["id"]))
        .toPromise();
    }
}
