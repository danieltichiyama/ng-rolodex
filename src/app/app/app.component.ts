import { Component } from "@angular/core";
import { OpenClose } from "src/app/services/openClose.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ng-rolodex";

  constructor(private openClose: OpenClose) {}

  modalIsOpen = () => {
    return this.openClose.modalIsOpen();
  };
}
