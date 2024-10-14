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
name:'';
result:any;
categorydata:any;
books:any;
  constructor(private route :Router,private service: CategoriesService,private activatedRoute: ActivatedRoute){}
 
  ngOnInit() :void{
    this.activatedRoute.params.subscribe(
      (data)=>{this.name==data['catdetail'];}
    )
    this.service.getAllCategory().subscribe(
      (data)=>{
        this.categorydata=data;
        this.result=this.categorydata.find((data)=>data.name==this.name)
        this.books=this.result.books;
      }
    )
  // Fill your code here
}

}
