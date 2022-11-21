import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    // Your code here, please
  }

  getHero(id: number): Observable<Hero> {
    // Your code here, please 2
  }
}
