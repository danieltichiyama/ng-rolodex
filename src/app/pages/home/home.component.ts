import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.services";
import { ContactState } from "../../services/contactState.services";
import { Router } from "@angular/router";
import { OpenClose } from "src/app/services/openClose.service";
import { SessionService } from "src/app/services/session.service";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private backend: BackendService,
    private contact: ContactState,
    private router: Router,
    private openClose: OpenClose,
    private session: SessionService
  ) {}

  private _contactsAsObservable; //not working!

  formData = {
    search: ""
  };

  contacts;

  ngOnInit() {
    console.log("initiation detected");

    if (this.session.getSession().id === 0) {
      this.router.navigate(["/login"]);
    }

    this._contactsAsObservable = this.backend.getContacts(); //not working!
    this._contactsAsObservable.subscribe(data => {
      this.contacts = data;
    }),
      err => {
        console.log(err);
      };
  }

  onEdit(data) {
    this.contact.populateContactData(data);
    return this.openClose.toggle("editCard");
  }

  onSearch(string) {
    return this.backend.search(string);
  }

  openContact(contact) {
    this.contact.populateContactData(contact);
    this.openClose.toggle("contact");
  }
}
