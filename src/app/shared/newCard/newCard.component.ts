import { Component } from "@angular/core";
import { BackendService } from "src/app/services/backend.services";
import { Router } from "@angular/router";
import { OpenClose } from "src/app/services/openClose.service";
import { SessionService } from "src/app/services/session.service";
import { ValidationService } from "src/app/services/validation.services";

@Component({
  selector: "app-newCard",
  templateUrl: "./newCard.component.html",
  styleUrls: ["./newCard.component.scss"]
})
export class NewCardComponent {
  constructor(
    private backend: BackendService,
    private openClose: OpenClose,
    private session: SessionService,
    private validation: ValidationService
  ) {}

  formData = {
    name: "",
    email: "",
    address: "",
    mobile: ""
  };

  isOpen = () => {
    return this.openClose.moduleStatuses.newCard;
  };

  onSubmit = () => {
    this.formData["created_by"] = this.session.getSession().id;
    this.openClose.toggle("newCard");

    this.backend.postCard(this.formData).then(results => {
      console.log("received data back from server.");
      console.log(results);
      return this.backend.getAllContacts();
    });
  };

  closeComponent = () => {
    this.openClose.toggle("newCard");
  };

  errors = {
    name: "",
    address: "",
    email: "",
    mobile: ""
  };

  valid = {
    name: false,
    email: false,
    address: false,
    mobile: false
  };

  validateName = () => {
    return this.validation.validateName(this.formData);
  };

  validateEmail = () => {
    return this.validation.validateEmail(this.formData);
  };

  validateMobile = () => {
    return this.validation.validateMobile(this.formData);
  };
}
