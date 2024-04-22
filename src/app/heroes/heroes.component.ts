import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';


@Component({
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
    RouterModule,
  ],
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroArr = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  heroArr: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`eroesComponent: Selected hero id=${hero.id}`)  
  }
}
