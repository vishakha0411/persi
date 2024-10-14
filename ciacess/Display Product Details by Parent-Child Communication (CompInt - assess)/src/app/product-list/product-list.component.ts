import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  selectedProduct : Product | null = null;
  products: Product[] =  [
    { id: 11, name: 'Samsung Galaxy Note 10',category:'Mobiles',price:69900,availQuantity:5,imageUrl:'assets/images/product1.jpg' },
    { id: 12, name: 'SkullCandy BT Inkd Plus',category:'Bluetooth Headset',price:1999,availQuantity:20,imageUrl:'assets/images/product2.jpg' },
    { id: 13, name: 'JBL Flip 3 Bluetooth speaker',category:'Speakers',price:5999,availQuantity:7,imageUrl:'assets/images/product4.jpg' },
    { id: 14, name: 'Conekt Volt Power Bank',category:'Power Bank',price:1350,availQuantity:4,imageUrl:'assets/images/product5.jpg' },
    { id: 15, name: 'Anker Soundbuds Rise',category:'Bluetooth Headset',price:2999,availQuantity:6,imageUrl:'assets/images/product3.jpg' },
    { id: 16, name: 'Apple Watch Series',category:'Watch',price:52940,availQuantity:2 ,imageUrl:'assets/images/product6.jpg'},
    ];
  constructor() { }

  ngOnInit() {
  }

  onClick(index: number){
    this.selectedProduct = this.products[index];
      console.log('clicked index ' + index);
      console.log("Selected product ", this.selectedProduct);
  }
  
}
