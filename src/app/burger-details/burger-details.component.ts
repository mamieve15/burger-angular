import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgersService } from '../Swagger/api/burgers.service';
import { Location } from '@angular/common';
import { BurgerDetail } from '../swagger';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {
  burger;
  constructor(
    private route: ActivatedRoute,
    private burgerService: BurgersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBurger();
  }

  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burgerService.burgerDetail(id)
      .subscribe(burger => this.burger = burger)
  }

  goBack(): void {
    this.location.back();
  }

}