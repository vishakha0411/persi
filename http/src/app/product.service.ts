import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { products } from './product-mock-data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  //Fill your code here
  private url = 'assets/product-mock-data.json';

constructor (private http: HttpClient){}

getProducts(): Observable<Product[]> {
return this.http.get<Product[]>(this.url);
}
// getProducts(){
//   return of(products);
// }
}
