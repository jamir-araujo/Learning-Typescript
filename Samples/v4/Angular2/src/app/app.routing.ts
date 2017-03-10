import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import ContactLitComponent from "./home/contactList.component";
import EditContactComponent from "./home/editContact.component";

const appRoutes: Routes = [
  { path: "", component: ContactLitComponent },
  { path: "editContact/:id", component: EditContactComponent },
  { path: "newContact", component: EditContactComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);