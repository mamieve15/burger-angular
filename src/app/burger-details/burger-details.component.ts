import { Component, OnInit } from '@angular/core';

import { BurgersService } from './swagger/api/burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerListComponent implements OnInit {

  burgerList;

  constructor(private burgersService : BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgerList = this.burgersService.listBurgers()
        .subscribe(burgerList => this.burgerList = burgerList);
  }
}