import { Injectable } from '@angular/core';
import { products } from './product-data';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  pro: Product[] = [];

  getProducts(sPrice?: number, ePrice?: number) {
    if (sPrice == undefined && ePrice == undefined) {
      this.pro = products;
       return products;
    }
    else {
      this.pro = products.filter((p) => p.price >= sPrice && p.price <= ePrice);
    }
    return this.pro;
  }

}