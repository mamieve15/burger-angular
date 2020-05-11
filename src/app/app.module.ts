import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiModule } from './swagger';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListBurgersComponent } from './list-burgers/list-burgers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import { BurgerDetailsComponent } from './burger-details/burger-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBurgersComponent,
    BurgerDetailsComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }