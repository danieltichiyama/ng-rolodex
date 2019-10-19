import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.services";
import { ContactState } from "../../services/contactState.services";
import { Router } from "@angular/router";
import { OpenClose } from "src/app/services/openClose.service";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private backend: BackendService,
    private contact: ContactState,
    private router: Router,
    private openClose: OpenClose
  ) {}

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

  onEdit(data) {
    this.contact.setContactData(data);
    return this.openClose.toggle("editCard");
  }
}
