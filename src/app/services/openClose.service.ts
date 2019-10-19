import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OpenClose {
  moduleStatuses = {
    newCard: false,
    editCard: false
  };

  toggle(key) {
    return (this.moduleStatuses[key] = !this.moduleStatuses[key]);
  }
}
