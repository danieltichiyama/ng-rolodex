import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { HeaderComponent } from "./shared/header/header.component";
import { Four04 } from "./pages/404/404.component";
import { CreateComponent } from "./pages/create/create.component";
import { ContactComponent } from "./shared/contact/contact.component";
import { NewCardComponent } from "./shared/newCard/newCard.component";
import { EditCardComponent } from "./shared/editCard/editCard.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    Four04,
    CreateComponent,
    EditCardComponent,
    ContactComponent,
    NewCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
