import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:User[] | undefined; //pblic users =[];


  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }//fill
}
