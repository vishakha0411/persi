import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import {DescriptionComponent} from './description/description.component';
const routes: Routes = [ 
  // Fill your code here
  {path:"", component:HomeComponent},
  {path:"/category", component:CategoriesComponent},
  {path:"/description", component:DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
