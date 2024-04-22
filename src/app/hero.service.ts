import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroArr } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return heroArr;
  }
  constructor() { }
}
