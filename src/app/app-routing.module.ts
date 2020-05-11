  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerComponent } from './burger/burger.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';


const routes: Routes = [
  { path: '', component: BurgerComponent },
  { path: 'burger/:id', component: BurgerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }