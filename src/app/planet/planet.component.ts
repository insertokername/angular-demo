import { Component } from '@angular/core';
import { main } from './planet_main'
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  heroArr?: Hero[];
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroArr = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
    main(this.heroArr)
  }
}
