import { Component, Input } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';
// 声明Hero组件;
// export class Hero {
//   id: number;
//   name: string;
// }

// 英雄列表;
// 数组形式1: 元素类型 + []
// const HEROS: Hero[] = [
// 数组形式2: 数组泛型，Array<元素类型>
// const HEROES: Array<Hero> = [
//   { id: 11, name: '小白' },
//   { id: 12, name: '小黑' },
//   { id: 13, name: '小灰' },
//   { id: 14, name: '小蓝' },
//   { id: 15, name: '小绿' },
//   { id: 16, name: '小紫' }
// ];

// 每个组件都以@Component装饰器函数开始，它接受一个元数据对象参数。
//
@Component({
  // selector: index.html中的自定义<my-app>标签里显示该组件, 相当于对外开发的组件名称;
  selector: 'app-root',
  // templateUrl: 模版地址;
  templateUrl: './app.component.html',
  // css文件路径;
  styleUrls: ['./app.component.css'],
  // 服务的提供商;
  // 组件内的提供商,只能在该组件和该组件的子组件中使用服务，在根组件中的服务可以全局使用;
  providers:[
    HeroService
  ]
})
export class AppComponent {
  title = 'app';
  // hero = 'Windstorm';
  // 把 hero属性从字符串转换为对象;
  hero: Hero = {
    id: 1,
    name: 'Winstom'
  };
  selectedHero: Hero;
  // 这里：TypeScript 能从HEROES数组中推断出来。
  // heroes = HEROES;
  // heroes: Hero[];
  heroes: Array<Hero>;
  // app-title的subtitle值;
  subtitle = 'Angular 组件测试';

  // 构造函数中的参数：服务;
  constructor(private heroService: HeroService) {
  };

  // 方法,事件;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(result => {
        this.heroes = result;
      })
  }
  // 钩子函数;
  ngOnInit() {
    this.getHeroes();
  }
}
