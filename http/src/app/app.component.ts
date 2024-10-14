import { Component ,OnInit} from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title="Welcome to Online shopping website"
  //Fill your code here
  product: Product[] = [];
constructor (private productService: ProductService){}
ngOnInit(): void {
this.productService.getProducts().subscribe(products => {
this.product = products;
})
}

}

//can write (products => this.product = products)
// this.productService.getProducts().subscribe(data=>this.product=data);