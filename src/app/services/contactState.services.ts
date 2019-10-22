import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactState {
  private _hasContactDataSubject = new BehaviorSubject<object>({});

  hasContactDataAsObservable() {
    return this._hasContactDataSubject.asObservable();
  }

  getContactData() {
    return this._hasContactDataSubject;
  }

  populateContactData(data) {
    return this._hasContactDataSubject.next(data); //WHERE IS THIS BEING CALLED!!
  }
}
