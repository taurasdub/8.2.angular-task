import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    return of(hero);
  }
}
