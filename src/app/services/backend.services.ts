import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http
      .get("/api/profile") //how to setup req.query in angular
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }

  getContacts() {
    console.log("getting contacts from database");
    return this.http
      .get("/api/contacts")
      .toPromise()
      .then(response => {
        return response;
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
