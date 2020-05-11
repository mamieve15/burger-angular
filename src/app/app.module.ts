import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BurgerComponent } from './burger/burger.component';
import { BurgerDetailComponent } from './burger-details/burger-details.component';

import { HttpClientModule } from '@angular/common/http';

import { ApiModule } from './swagger';



@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ApiModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }