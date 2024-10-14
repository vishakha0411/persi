import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import {FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
