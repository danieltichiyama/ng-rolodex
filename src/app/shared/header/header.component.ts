import { Component } from "@angular/core";
import { OpenClose } from "src/app/services/openClose.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(private openClose: OpenClose) {}

  openNewCard = () => {
    this.openClose.toggle("newCard");
  };
}
