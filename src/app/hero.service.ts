import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient) {}

  // This method makes a request to get all heroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // This method makes a request to get some exact hero
  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }
}
