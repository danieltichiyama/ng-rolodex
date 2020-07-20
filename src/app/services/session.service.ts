import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  user = {
    id: 0,
    username: "",
    // loggedIn: false
  };

  private _isLoggedInSubject = new BehaviorSubject<boolean>(false); //new

  constructor() {
    //check if the user is in localStorage
    let userString = localStorage.getItem("user");
    try {
      if (userString) {
        this.user = JSON.parse(userString);
      } else {
        console.log("user was not found");
      }

      //update _isLoggedInSubject on construction, new
      this._isLoggedInSubject.next(!!userString); //new
    } catch (err) {
      console.log("could not parse user");
    }
  }

  getSession() {
    return this.user;
  }

  setSession(response) {
    //save to memory, step 1
    this.user.id = response.id;
    this.user.username = response.username;
    // this.user.loggedIn = true; removed

    //save to localStorage, step 2
    let userString = JSON.stringify(this.user);
    localStorage.setItem("user", userString); //localStorage will save information to the client's browser

    //update subject
    this._isLoggedInSubject.next(true);
  }

  clearSession() {
    //remove from memory, step 1
    this.user.id = 0;
    // (this.user.username = ""), (this.user.loggedIn = false); removed

    //remove from localStorage, step 2
    localStorage.removeItem("user");

    return this._isLoggedInSubject.next(false);
  }

  // isLoggedIn() {
  //   return this.user.loggedIn;
  // } removed

  isLoggedInAsObservable() {
    //new
    return this._isLoggedInSubject.asObservable();
  }
}
