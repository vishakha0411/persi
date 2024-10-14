import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {OnInit} from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
form: FormGroup;
clicked = false;
imagePath: string;
ngOnInit(){
this.form = new FormGroup({
'name': new FormControl(null, Validators.required),
'price' : new FormControl(null, Validators.required),
'brand' : new FormControl(null, Validators.required),
'image' : new FormControl(null, Validators.required),
});
}
onSubmit(){
console.log(this.form);
this.clicked = true;
this.imagePath = this.form.value.image;
}
}