// 路由组件;
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-dashboard',
  // template: '<h3>My Dashboard</h3>'
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
// export class DashboardComponent {
  // OnInit接口 :因为我们将在ngOnInit方法中初始化英雄数组
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroesSlowly()
      .then(result => {
        this.heroes = result.slice(1, 5);
      })
  }
}
