import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  formData = {
    username: "",
  };

  login = () => {
    this.auth
      .login(this.formData)
      .then(() => {
        return this.router.navigate(["/"]);
      })
      .catch((err) => {
        console.log(err);
        return this.router.navigate(["/login"]);
      });
  };
}
