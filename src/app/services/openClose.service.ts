import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OpenClose {
  moduleStatuses = {
    newCard: false,
    editCard: false,
    contact: false
  };

  toggle(key) {
    console.log("toggling " + key + "property");
    return (this.moduleStatuses[key] = !this.moduleStatuses[key]);
  }
}
