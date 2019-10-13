import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  contact = {
    name: "Alfred Hitchcock",
    address: "1234 ShutTheDoor Lane",
    email: "alfred.h@msn.com"
  };
}
