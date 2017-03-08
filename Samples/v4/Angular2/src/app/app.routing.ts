import { Routes, RouterModule } from "@angular/router";
import HomeComponent from "./home/home.component";
import EditContactComponent from "./home/editContact.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "editContact/:id", component: EditContactComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);