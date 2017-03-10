import { NgModule } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Routing } from "./app.routing";
import PeopleService from "./contracts/services/peopleService";
import HttpPeopleService from "./services/httpPeopleService";
import HomeComponent from "./home/home.component";
import EditContactComponent from "./home/editContact.component";
import ContactListComponent from "./home/contactList.component";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        Routing
    ],
    declarations: [
        HomeComponent,
        EditContactComponent,
        ContactListComponent
    ],
    providers: [
        { provide: PeopleService, useClass: HttpPeopleService }
    ],
    bootstrap: [HomeComponent]
})
export default class AppModule { }