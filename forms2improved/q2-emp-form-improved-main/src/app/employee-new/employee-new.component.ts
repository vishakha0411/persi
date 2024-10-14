import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorService } from './errors.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrl: './employee-new.component.css',
})
export class EmployeeNewComponent implements OnInit {
  employeeForm!: FormGroup;
  desigList: String[] = [
    'Manager',
    'Production Manager',
    'Associate Engineer',
    'CFO',
    'Engineering Manager',
    'Engineer',
  ];

  constructor(public errorService: ErrorService) {}
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-z]+$'),
      ]),
      designation: new FormControl(null, Validators.required),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^\\d{10}$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern('^\\d+$'),
        Validators.min(20),
        Validators.max(60),
      ]),
      dateOfJoining: new FormControl(null, Validators.required),
    });
    this.errorService.setForm = this.employeeForm;
  }

  onSubmit() {
    console.log(this.employeeForm);
  }
}
