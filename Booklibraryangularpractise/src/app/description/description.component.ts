import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/service/categories.service';
import { Categories } from '../shared/models/Categories';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
name='';
result:any;
c:any;//categories array
books:any;
  constructor(private route :Router,private service: CategoriesService,private activatedRoute: ActivatedRoute){}
 
  ngOnInit():void{
  this.activatedRoute.params.subscribe((d)=>{
    this.name=d['categoryName'];//The callback receives d, an object that contains the route parameters. For example, if the route is /categories/books, d will be { categoryName: 'books' }. The categoryName from the route is assigned to the name property of the component, which is used later to find the matching category.
  })//can write another name instead of categoryname

  this.service.getallcategory().subscribe(
    (d)=>{
      this.c=d;
      this.result=this.c.find(
        (data:any)=> data.name==this.name)
        this.books=this.result.books;/*this.result = this.c.find((data: any) => data.name == this.name);:Uses the .find() method to search through the category array this.c to find the category object whose name matches this.name (the value extracted from the route parameters).this.books = this.result.books;: Once the matching category is found, the component assigns the list of books from the result category to this.books, making it available for display in the template. */
    }
  )
  // Fill your code here
  }
}
/* 
Observables: Both params (route parameters) and the service call return observables in Angular. Observables are asynchronous streams of data that you need to subscribe to in order to receive the emitted values.
*/