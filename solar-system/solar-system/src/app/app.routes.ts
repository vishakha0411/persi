import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CosmosComponent } from './cosmos/cosmos.component';

export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'cosmos', component:CosmosComponent}
];

//the redirectTo:'/home' / is used because regardless of wherever you are redirect to home
// and im component one use path:'home' bcoz we have component so dont use /