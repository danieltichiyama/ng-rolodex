import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OpenClose {
  moduleStatuses = {
    newCard: false,
    editCard: false,
    contact: false,
  };

  toggle(key) {
    for (let prop in this.moduleStatuses) {
      if (prop !== key) {
        this.moduleStatuses[prop] = false;
      } else {
        this.moduleStatuses[prop] = !this.moduleStatuses[prop];
      }
    }
  }

  modalIsOpen = () => {
    for (let key in this.moduleStatuses)
      if (this.moduleStatuses[key]) {
        return true;
      }

    return false;
  };
}
