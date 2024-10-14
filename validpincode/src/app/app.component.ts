import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
      })
      export class AppComponent {
        validPincodes: string[] = ['641028', '641218', '652333', '641027', '641021'];
          userPincode: string = '';
            message: string = '';

          validatePin() {
          //Fill your code here
          if (this.validPincodes.includes(this.userPincode)) {
                this.message = 'Delivery is possible.';
          } else {
            this.message = 'Sorry! Delivery is not possible.';
                      }
                }
          }
