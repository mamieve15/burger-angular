import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../swagger/api/burgers.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class ListBurgersComponent implements OnInit {
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