import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.services";
import { ContactState } from "src/app/services/contactState.services";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  constructor(
    private backend: BackendService,
    private contact: ContactState,
    private router: Router
  ) {}

  formData;

  ngOnInit() {
    this.formData = Object.assign(this.contact.contactData);
    this.contact.contactData = undefined;
  }

  onSubmit() {
    this.backend.putCard(this.formData).then(results => {
      console.log("received data back from server.");
      console.log(results);
      return this.router.navigate([`/contacts/${results}`]);
    });
  }
}
