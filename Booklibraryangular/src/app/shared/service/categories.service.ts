import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url ="src/assets/mock-data.json";
  
  constructor(private http: HttpClient) { }

  // Fill your code here 
  getAllCategory(){
    return this.http.get(this.url);
  }

}
