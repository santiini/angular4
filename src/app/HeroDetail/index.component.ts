// 英雄详情页;
import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// @Component装饰器为组件提供了Angular元数据。
@Component({
  // 组件对外的调用标签;
  selector: 'hero-detail',
  // template: `
  //   <div *ngIf="hero">
  //     <h3>{{hero.name}} details!hero-detail组件内</h3>
  //     <div>
  //       <label>id:</label>{{hero.id}}
  //       <input [(ngModel)]="hero.name" placeholder="name" >
  //     </div>
  //   </div>
  // `
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
// OnInit接口: 在ngOnInit方法中初始化英雄数组
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  // 构造函数；
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  //  方法:
  // 返回;
  goBack(): void {
    this.location.back()
  }
  // 保存;
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack())
  }

  // 钩子函数;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params
        .switchMap((params: Params) => {
          return this.heroService.getHero(+params['id'])
        })
        .subscribe(hero => {
          this.hero = hero;
        })
  }
}
