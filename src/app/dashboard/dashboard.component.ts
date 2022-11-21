import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getHeroes();
  }

  //You should provide here the logic to get heroes and set them to heroes property
  getHeroes(): void {
  }
}
