import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameListComponent } from './namelist.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    NameListComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot([
      // the order matters!!!
      { path: 'welcome', component: WelcomeComponent },
      { path: 'contacts', component: NameListComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }, // why 2 **?
    ]),
    ProductModule // one of the feature module
  ],
  /*
  the component that is loaded when the application is launched,
  this is the root application component
  the bootstrap array is only used in this root application module, AppModule
  */
  bootstrap: [AppComponent]
})
export class AppModule { }

