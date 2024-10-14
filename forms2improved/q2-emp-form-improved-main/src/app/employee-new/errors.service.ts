import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class ErrorService {
  public employeeForm!: FormGroup;
  set setForm(employeeForm: FormGroup) {
    this.employeeForm = employeeForm;
  }
  get nameError() {
    const nameControl = this.employeeForm.get('name');
    if (!nameControl) {
      return '';
    }
    const errorObj: Object | null = nameControl.errors;
    if (!errorObj) {
      return '';
    }
    if (errorObj.hasOwnProperty('required')) {
      return 'Name is required';
    }

    if (errorObj.hasOwnProperty('minlength')) {
      return 'Name must be at least 4 chars long!';
    }
    if (errorObj.hasOwnProperty('pattern')) {
      return 'Name cannot have numbers or special characters!';
    }

    return '';
  }

  get mobileError() {
    const nameControl = this.employeeForm.get('mobileNumber');
    if (!nameControl) {
      return '';
    }
    const errorObj: Object | null = nameControl.errors;
    if (!errorObj) {
      return '';
    }
    if (errorObj.hasOwnProperty('required')) {
      return 'Mobile Number is required!';
    }
    if (errorObj.hasOwnProperty('pattern')) {
      return 'Mobile Number is invalid!';
    }

    return '';
  }

  get ageError() {
    const nameControl = this.employeeForm.get('age');
    if (!nameControl) {
      return '';
    }
    const errorObj: Object | null = nameControl.errors;
    if (!errorObj) {
      return '';
    }
    if (errorObj.hasOwnProperty('required')) {
      return 'Age is required!';
    }
    if (errorObj.hasOwnProperty('pattern')) {
      return 'Invalid age input!';
    }

    if (errorObj.hasOwnProperty('min') || errorObj.hasOwnProperty('max')) {
      return 'Incorrect age input! Accepted only integers of range 20-60!';
    }
    return '';
  }

  get emailError() {
    const nameControl = this.employeeForm.get('email');
    if (!nameControl) {
      return '';
    }
    const errorObj: Object | null = nameControl.errors;
    if (!errorObj) {
      return '';
    }
    if (errorObj.hasOwnProperty('required')) {
      return 'Email ID is required!';
    }
    if (errorObj.hasOwnProperty('email')) {
      return 'Email ID is invalid!';
    }
    return '';
  }
}
