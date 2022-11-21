import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor() {}

  ngOnInit(): void {
    this.getHero();
  }

  //You should provide here the logic to get hero and set it to hero property
  getHero(): void {
  }

  //You should provide here the logic to return on dashboard
  goBack(): void {
  }
}
