import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroArr } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(heroArr);
    return heroes;
  }
  constructor() { }
}
