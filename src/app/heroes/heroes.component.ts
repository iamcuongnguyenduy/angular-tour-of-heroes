import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[]=[];
 
  // constructor(private heroService: HeroService, private messageService: MessageService){
  // }
  constructor(private heroService: HeroService){
  }

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // selectedHero?: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Selected Hero: ${hero.id}`)
  // }

  ngOnInit(): void {
    this.getHeroes()
  }


}
