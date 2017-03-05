import { Routes, RouterModule } from "@angular/router";
import HomeComponent from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "editContact/:id", component: null }
];

export const Routing = RouterModule.forRoot(appRoutes);