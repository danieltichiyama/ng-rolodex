import { Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.services";
import { OpenClose } from "src/app/services/openClose.service";
import { ContactState } from "src/app/services/contactState.services";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  constructor(
    private backend: BackendService,
    private openClose: OpenClose,
    private contact: ContactState
  ) {}

  cardData: object;

  _hasContactDataAsObservable;

  ngOnInit() {
    this._hasContactDataAsObservable = this.contact.hasContactDataAsObservable();
    this._hasContactDataAsObservable.subscribe((data: object) => {
      this.cardData = data;
    });
  }

  toggleComponent = () => {
    return this.openClose.toggle("contact");
  };

  isOpen() {
    return this.openClose.moduleStatuses.contact;
  }

  onEdit(data) {
    this.contact.populateContactData(data);
    this.openClose.toggle("editCard");
    return this.openClose.toggle("contact");
  }

  onDelete = data => {
    this.backend.deleteCard(data).then(results => {
      this.openClose.toggle("contact");
      return this.backend.getAllContacts();
    });
  };
}
