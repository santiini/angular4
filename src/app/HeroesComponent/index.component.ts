// 英雄类;
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class HeroesComponent {
// export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // 构造函数;
  constructor(
    private router: Router,
    private heroService: HeroService
  ){}

  // 方法函数;
  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(result => {
        this.heroes = result;
      })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // 添加;
  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.create(name)
      .then(result => {
        this.heroes.push(result);
        this.selectedHero = null;
      });
  }

  // 删除;
  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(item => item !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  // 钩子函数;
  ngOnInit(): void {
    this.getHeroes();
  }

  goDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
