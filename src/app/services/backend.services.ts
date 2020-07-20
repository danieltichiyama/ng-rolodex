import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "./session.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
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
    let config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    };
    return this.http
      .post("/api/login", data, config)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  register(data) {
    return Promise.resolve();
  }

  logout() {
    let config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    };

    let { id } = JSON.parse(localStorage.getItem("user"));

    return this.http
      .get(`/api/logout`)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUser() {
    return this.http
      .get("/api/profile")
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  getAllContacts() {
    this.userId = this.session.getSession().id;
    return this.http
      .get(`/api/contacts?user=${this.userId}`)
      .toPromise()
      .then((response) => {
        return this._contactsSubject.next(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  search(string) {
    this.userId = this.session.getSession().id;
    return this.http
      .get(`/api/contacts/search/${string}?user=${this.userId}`)
      .toPromise()
      .then((response) => {
        return this._contactsSubject.next(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postCard(data) {
    let config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    };
    return this.http
      .post("/api/contacts", data, config)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  putCard(data) {
    let config = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
    };

    return this.http
      .put(`api/contacts/${data.id}`, data, config)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  deleteCard(data) {
    return this.http
      .delete(`api/contacts/${data.id}`, data)
      .toPromise()
      .then((results) => {
        return results;
      });
  }
}
