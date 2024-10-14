import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   productList = []
   constructor(public service:ProductService) { }

  ngOnInit() {
    //Fill your code
    this.productList=this.service.getProductList()
  }
}
