import { Injectable } from "@angular/core";
import { BackendService } from "./backend.services";
import { SessionService } from "./session.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root" //allows you to automatically bind the service to the module, without typing it out in the app.module file
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService,
    private router: Router
  ) {}
  login(data) {
    console.log("sending form data to backend.service");
    return this.backend.login(data).then(response => {
      console.log("sending data from backend.service to session.service");
      this.session.setSession(response);
    });
  }

  register(data) {
    return this.backend.register(data).then(response => {
      this.session.setSession(response);
    });
  }

  logout() {
    return this.backend
      .logout()
      .then(() => {
        this.session.clearSession();
      })
      .then(() => {
        return this.router.navigate(["/login"]);
      });
  }
}
