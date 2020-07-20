import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidationService {
  errors = {
    name: "",
    address: "",
    email: "",
    mobile: ""
  };

  valid = {
    name: false,
    email: false,
    address: false,
    mobile: false
  };

  validateName = formData => {
    if (!formData.name) {
      this.valid.name = false;
      this.errors.name = "field is required";
    } else {
      this.valid.name = true;
      this.errors.name = "";
    }

    return this.valid.name;
  };

  validateEmail = formData => {
    if (!formData.email) {
      this.valid.email = false;
      this.errors.email = "field is required";
    } else if (!formData.email.includes("@")) {
      this.valid.email = false;
      this.errors.email = "invalid email";
    } else if (!formData.email.split("@")[1].includes(".")) {
      this.valid.email = false;
      this.errors.email = "invalid email";
    } else {
      this.valid.email = true;
      this.errors.email = "";
    }

    return this.valid.email;
  };

  validateMobile = formData => {
    if (formData.mobile.length < 11) {
      this.valid.mobile = false;
      this.errors.mobile = "mobile number invalid";
    } else if (isNaN(parseFloat(formData.mobile))) {
      this.valid.mobile = false;
      this.errors.mobile = "mobile number invalid";
    } else {
      this.valid.mobile = true;
      this.errors.mobile = "";
    }

    return this.valid.mobile;
  };
}
