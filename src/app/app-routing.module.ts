import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBurgersComponent } from './burgers/burgers.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';

const routes: Routes = [
  {path: '', component: ListBurgersComponent},
  {path: 'burger/:id', component: BurgerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }