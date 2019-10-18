import { Component } from "@angular/core";
import { BackendService } from "src/app/services/backend.services";
import { Router } from "@angular/router";
import { OpenClose } from "src/app/services/openClose.service";

@Component({
  selector: "app-newCard",
  templateUrl: "./newCard.component.html",
  styleUrls: ["./newCard.component.scss"]
})
export class NewCardComponent {
  constructor(
    private backend: BackendService,
    private router: Router,
    private openClose: OpenClose
  ) {}

  formData = {
    name: "",
    email: "",
    address: ""
  };

  isOpen = () => {
    return this.openClose.moduleStatuses.newCard;
  };
  onSubmit = () => {
    this.backend.postCard(this.formData).then(results => {
      console.log("received data back from server.");
      console.log(results);
      return this.router.navigate(["/"]);
    });
  };

  closeComponent = () => {
    this.openClose.toggle("newCard");
  };
}
