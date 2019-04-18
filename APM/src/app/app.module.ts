import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameListComponent } from './namelist.component';
import { ProductListComponent } from './products/product-list.component';


@NgModule({
  declarations: [
    AppComponent, NameListComponent, ProductListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
