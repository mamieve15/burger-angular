import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../swagger/api/burgers.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerListComponent implements OnInit {
  burgers;
  constructor(private burgerService: BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgers = this.burgerService.listBurgers()
        .subscribe(burgers => this.burgers = burgers);
  }

}