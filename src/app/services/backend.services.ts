import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "./session.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  private _contactsSubject = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, private session: SessionService) {}

  userId;

  contactsAsObservable() {
    return this._contactsSubject.asObservable();
  }

  getContacts() {
    return this._contactsSubject;
  }

  setContacts(data) {
    return this._contactsSubject.next(data);
  }

  login(data) {
    console.log("sending user data to server");
    let config = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    };
    return this.http
      .post("/api/login", data, config)
      .toPromise()
      .then(response => {
        console.log("found user from server");
        return response;
      });
  }

  register(data) {
    return Promise.resolve();
  }

  logout() {
    return Promise.resolve();
  }

  getUser() {
    return this.http
      .get("/api/profile")
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }

  getAllContacts() {
    this.userId = this.session.getSession().id;
    console.log("getting contacts from database");
    return this.http
      .get(`/api/contacts?user=${this.userId}`)
      .toPromise()
      .then(response => {
        return this._contactsSubject.next(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  search(string) {
    this.userId = this.session.getSession().id;

    console.log("Sending request to server");
    console.log(string);
    return this.http
      .get(`/api/contacts/search/${string}?user=${this.userId}`)
      .toPromise()
      .then(response => {
        return this._contactsSubject.next(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  postCard(data) {
    console.log("posting new contact to database");
    let config = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    };
    return this.http
      .post("/api/contacts", data, config)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  putCard(data) {
    console.log("putting edited contact into database");
    let config = {
      method: "PUT",
      headers: { "Content-type": "application/json" }
    };

    return this.http
      .put(`api/contacts/${data.id}`, data, config)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
