// 英雄详情页;

import { Component, Input } from '@angular/core';

import { Hero } from './hero';

// @Component装饰器为组件提供了Angular元数据。
@Component({
  // 组件对外的调用标签;
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h3>{{hero.name}} details!hero-detail组件内</h3>
      <div>
        <label>id:</label>{{hero.id}}
        <input [(ngModel)]="hero.name" placeholder="name" >
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
