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
    if (this.moduleStatuses[key] === false) {
      for (let prop in this.moduleStatuses) {
        if (prop !== key) {
          this.moduleStatuses[prop] = false;
        }
      }
    }

    if (key === "contact" && this.moduleStatuses.contact) {
      return (this.moduleStatuses.contact = true);
    }

    return (this.moduleStatuses[key] = !this.moduleStatuses[key]);
  }

  turnOffAllExcept(key: string) {
    for (key in this.moduleStatuses) {
      if (!this.moduleStatuses[key]) {
      }
    }
  }
}
