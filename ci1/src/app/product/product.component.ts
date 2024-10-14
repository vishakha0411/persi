import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  //
   products=[
     {id:1,name:'CLASSIC watch',imageUrl:'assets/images/watch.jpg'},
     {id:2,name:'MacBook',imageUrl:'assets/images/macbook.jpg'},
     {id:3,name:'GOLD iPhone Xs',imageUrl:'assets/images/IphoneX.jpg'},
     {id:4,name:'BLACK iPhone Xs',imageUrl:'assets/images/IphoneBlack.jpg'},
     {id:5,name:'Apple Close up',imageUrl:'assets/images/iphone.jpg'},
     {id:6,name:'Sony Xperia',imageUrl:'assets/images/Xperia.jpg'},
     {id:7,name:'OPPO R17',imageUrl:'assets/images/Oppo.jpg'},
     {id:8,name:'OnePlus 6T',imageUrl:'assets/images/1plus.jpg'},
  ]
  ngOnInit() {
  }
}