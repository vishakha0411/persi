import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  public usersList  = [
    {id:1 ,userName:"Supporter",mobileNumber:"9878656789",password:"support123",gender:"male",email:"support@gmail.com",role:"support"},
    {id:2 ,userName:"Gigi Hadid",mobileNumber:"9578756434",password:"Gigi",gender:"female",email:"gigi@gmail.com",role:"user"},
    {id:3 ,userName:"Louis",mobileNumber:"8976543456",password:"Louis",gender:"male",email:"loius@gmail.com",role:"user"},
    {id:4 ,userName:"Zain",mobileNumber:"8503458788",password:"Zain",gender:"male",email:"zain@gmail.com",role:"user"},
    {id:5,userName:"David",mobileNumber:"6503458756",password:"David",gender:"male",email:"david@gmail.com",role:"user"},
    {id:6 ,userName:"Peter",mobileNumber:"9867563456",password:"Peter",gender:"male",email:"peter@gmail.com",role:"user"},
    {id:7 ,userName:"Clay",mobileNumber:"8703458788",password:"Clay",gender:"male",email:"clay@gmail.com",role:"user"},
    {id:8 ,userName:"Harry",mobileNumber:"9089786756",password:"Harr",gender:"male",email:"harry@gmail.com",role:"user"},
    {id:9 ,userName:"Robert",mobileNumber:"8978904567",password:"Robert",gender:"male",email:"robert@gmail.com",role:"user"},
    {id:10 ,userName:"Smith",mobileNumber:"9524767777",password:"Smith",gender:"male",email:"smith@gmail.com",role:"user"},
    {id:11 ,userName:"Smith",mobileNumber:"9524767778",password:"Smith",gender:"male",email:"smith123@gmail.com",role:"user"}
  ]

 getUserObjList(){
    // Fill your code
    return this.usersList;
 }
}
