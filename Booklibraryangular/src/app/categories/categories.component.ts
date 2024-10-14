import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/service/categories.service';
import { Categories } from '../shared/models/Categories';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category:Categories[]=[];
  selected?:Categories;

  categoryForm: FormGroup;
  constructor(private route :Router,private service: CategoriesService) {
    this.categoryForm=new FormGroup({
      categorysSelect:new FormControl(null, Validators.required)
    });
  }
  
  ngOnInit() {
    this.service.getAllCategory().subscribe(
      (data)=>this.category=data
    )
  }
  onCategoryChange() {
    this.selected = this.categoryForm.controls['categorySelect'].value;
  }
  // fill your code here
}
