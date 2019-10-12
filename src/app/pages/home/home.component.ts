import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.services";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(private backend: BackendService) {}

  formData = {
    search: ""
  };

  onLoad = () => {
    this.backend.getUser();
  };
}
