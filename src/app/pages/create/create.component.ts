import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.services";

@Component({
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent {
  constructor(private backend: BackendService) {}

  formData = {
    name: "",
    email: "",
    address: ""
  };

  onSubmit = () => {
    this.backend.postCard(this.formData).then(results => {
      console.log("received data back from server.");
      console.log(results);
      return results;
    });
  };
}
