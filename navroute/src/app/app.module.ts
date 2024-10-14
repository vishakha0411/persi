import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';//import

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule {}

