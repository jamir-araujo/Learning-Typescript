import { NgModule } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { Routing } from "./app.routing";
import PeopleService from "./contracts/services/peopleService";
import HttpPeopleService from "./services/httpPeopleService";
import HomeComponent from "./home/home.component";

@NgModule({
    imports: [
        HttpModule,
        Routing
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        { provide: PeopleService, useClass: HttpPeopleService },
        Http
    ],
    bootstrap: [HomeComponent]
})
export default class AppModule { }