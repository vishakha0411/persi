import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [
    { id: 1011, name: 'Abimbola' },
    { id: 1012, name: 'Lethabo' },
    { id: 1013, name: 'Adaeh' },
    { id: 1014, name: 'Akello' },
    { id: 1015, name: 'Awino' },
    { id: 1016, name: 'Esiankiki' },
    { id: 1017, name: 'Etemaad' },
    { id: 1018, name: 'Jimiyu' },
    { id: 1019, name: 'Kayode' },
    { id: 1020, name: 'Kubwa' },
    { id: 1021, name: 'Lebron' },
    { id: 1022, name: 'Mansa' },
    { id: 1023, name: 'Nomalanga' },
    { id: 1024, name: 'Nya' },
    { id: 1025, name: 'Rashidi' },
    { id: 1026, name: 'Warui' },
  ];

  getUsers():User[]{
    return this.userList;
  }
  constructor() { }
  
}
