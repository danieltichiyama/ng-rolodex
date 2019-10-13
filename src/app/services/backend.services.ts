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
    return this.http
      .get("/api/contacts")
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }
}
