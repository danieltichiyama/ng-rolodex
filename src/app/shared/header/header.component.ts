import { Component, OnDestroy, OnInit } from "@angular/core";
import { OpenClose } from "src/app/services/openClose.service";
import { SessionService } from "src/app/services/session.service";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { BackendService } from "src/app/services/backend.services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  user = {};

  private _isLoggedIn = false;
  private _isLoggedInAsObservable;

  constructor(
    private openClose: OpenClose,
    private session: SessionService,
    private auth: AuthService,
    private router: Router,
    private backend: BackendService
  ) {
    this.user = this.session.getSession();
  }

  ngOnInit() {
    this._isLoggedInAsObservable = this.session.isLoggedInAsObservable();
    this._isLoggedInAsObservable.subscribe(
      (loggedIn: boolean) => {
        this._isLoggedIn = loggedIn;
      },
      err => {
        console.log(err);
      }
    );
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  logout = () => {
    return this.auth.logout();
  };

  openNewCard = () => {
    this.openClose.toggle("newCard");
  };

  onViewAll = () => {
    return this.backend.getAllContacts();
  };

  ngOnDestroy() {
    this._isLoggedInAsObservable.unsubscribe();
  }
}
