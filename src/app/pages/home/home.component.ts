import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.services";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private backend: BackendService) {}

  formData = {
    search: ""
  };

  contacts;

  ngOnInit() {
    console.log("initiation detected");

    this.backend.getContacts().then(results => {
      this.contacts = results;
      console.log("contacts, after ngOnInit", this.contacts);
    });
  }
}
