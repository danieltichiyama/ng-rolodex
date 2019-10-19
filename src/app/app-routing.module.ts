import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { Four04 } from "./pages/404/404.component";
import { ContactComponent } from "./pages/contact/contact.component";
//Routersnapshot
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "contacts/:id", component: ContactComponent },
  { path: "**", component: Four04 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
