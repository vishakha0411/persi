import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from '../../assets/models/employee-mock';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-employee-new',
    templateUrl: './employee-new.component.html',
    styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

    desigList: String[] = ["", "Manager", "Production Manager", "Associate Engineer", "CFO", "Engineering Manager", "Engineer"];

    emp;
    ngOnInit(): void {
        this.emp = EMPLOYEE;
    }
    //Fill your code here

    employeeForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z  ]*')]),
        phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        des: new FormControl('', [Validators.required]),
        doj: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(20), Validators.max(60)]),
    });

    get f() {
        return this.employeeForm.controls;
    }

    createForm() {
        if (this.employeeForm.valid) {
            let emp_id =  this.emp[this.emp.length-1].emp_id + 1;
            let nEmp = this.employeeForm.value;
            nEmp[' emp_id'] = emp_id;
            this.emp.push(nEmp);
            console.log(nEmp)
            alert("Emplpyee data added successfully!")
            this.employeeForm.reset();
        }
    }
}