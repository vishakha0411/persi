import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
//3
const routes: Routes = [
     {path:'',redirectTo:'user',pathMatch:'full'},
      {path:'user',component:UserComponent},
      {path:'product',component:ProductComponent}
];

@NgModule({
  //Fill your code
  imports: [
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
   

export class AppRoutingModule { 
 constructor(){
 
 }
}