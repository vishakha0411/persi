import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

    public productList:Array<Object> = [
        {id: 1, name: 'One Plus 7 Pro',imageUrl:'assets/images/img3.jpeg',price:'48,999',tag:'SmartPhone',configuration:'8 GB RAM | 256 GB ROM',display:'16.94 cm (6.67 inch) Display',rating:'4.0',description:'13.84 cm (5.45 inch) HD+ Display,12MP Rear Camera | 5MP Front Camera,4000 mAh Li-Polymer Battery,Qualcomm Snapdragon 439 Processor.Brand Warranty of 2 Years Available for Mobile and 6 Months for Accessories.'},
        {id: 2, name: 'One Plus 1',imageUrl:'assets/images/img2.jpeg',price:'25,999',tag:'Laptops',configuration:'3 GB RAM | 32 GB ROM  ',display:'14.48 cm (5.7 inch) HD+ Display',rating:'3.5',description:'12MP Rear Camera | 5MP Front Camera,4000 mAh Li-Polymer Battery,Qualcomm Snapdragon 439 Processor,Brand Warranty of 2 Years Available for Mobile and 6 Months for Accessories.'},
        {id: 3, name: 'iPhone XR',imageUrl:'assets/images/img1.jpeg',price:'64,999',tag:'Wearables',configuration:'128 GB ROM',display:'15.49 cm (6.1 inch) Display',rating:'4.3',description:'12MP Rear Camera | 7MP Front Camera,A12 Bionic Chip Processor,Brand Warranty of 1 Year.'},
        {id: 4, name: 'Tizen',imageUrl:'assets/images/img4.jpeg',price:'4,999',tag:'SmartPhone',configuration:'1 GB RAM | 8 GB ROM | Expandable Upto 128 GB',display:'12.7 cm (5 inch) HD Display',rating:'4.5',description:'8MP Rear Camera | 5MP Front Camera,2600 mAh Li-Ion Battery,1 Year Manufacturer Warranty.'},
    ];
      

getProductList(){
    //Fill your code
    return this.productList}
}
