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

  getHero(): void {
    // Your code here, please
  }

  goBack(): void {
    // Your code here, please 2
  }
}
