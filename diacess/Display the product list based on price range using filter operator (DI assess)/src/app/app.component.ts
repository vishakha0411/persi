import { Component } from '@angular/core';
import { ProductService } from './product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private productService: ProductService) { }
  products;
  sPrice;
  ePrice;
  ngOnInit() {
  	//Call service to get product list
    this.products = this.productService.getProducts();
  }

  applyFilter() {
   this.products = this.productService.getProducts(this.sPrice, this.ePrice);
  }
}