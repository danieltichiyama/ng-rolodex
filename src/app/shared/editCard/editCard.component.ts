import { Component, OnInit, OnDestroy } from "@angular/core";
import { BackendService } from "../../services/backend.services";
import { ContactState } from "src/app/services/contactState.services";
import { Router } from "@angular/router";
import { OpenClose } from "src/app/services/openClose.service";

@Component({
  selector: "app-editCard",
  templateUrl: "./editCard.component.html",
  styleUrls: ["./editCard.component.scss"]
})
export class EditCardComponent implements OnInit, OnDestroy {
  constructor(
    private backend: BackendService,
    private contact: ContactState,
    private router: Router,
    private openClose: OpenClose
  ) {}

  private _hasContactDataAsObservable;

  formData;

  ngOnInit() {
    this._hasContactDataAsObservable = this.contact.hasContactDataAsObservable();
    this._hasContactDataAsObservable.subscribe((data: object) => {
      this.formData = data;
    }),
      err => {
        console.log(err);
      };
  }
  onSubmit() {
    this.backend.putCard(this.formData).then(results => {
      console.log("received data back from server.");
      console.log(results);
      this.toggleComponent();
      return this.router.navigate([`/`]);
    });
  }

  isOpen() {
    return this.openClose.moduleStatuses.editCard;
  }

  toggleComponent() {
    return this.openClose.toggle("editCard");
  }

  ngOnDestroy() {
    this._hasContactDataAsObservable.unsubscribe();
  }
}
