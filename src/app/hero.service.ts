// 英雄服务 heroService
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// 引入公共库的方法： toPromise;
// 只要从 RxJS 库中导入方法;
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


//@Injectable()装饰器: 可注入的服务
// tips: 不要忘了写圆括号！如果忘了写，就会导致一个很难诊断的错误。
// HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。
// 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
// HeroService服务可以在多组件中使用;

// @Injectable() 标识一个类可以被注入器实例化。
@Injectable()
export class HeroService {
  private heroesUrl: string = 'api/heroes';  // URL to web api

  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private http: Http){}

  // 获取英雄数据;
  // getHeroes(): void {
  // getHeroes(): Array<Hero>{
  // getHeroes(): Promise<Hero[]>{
  getHeroes(): Promise<Array<Hero>>{
    // return HEROES;
    // return Promise.resolve(HEROES);

    // 网络请求
    // Angular 的http.get返回一个 RxJS 的Observable对象。
    // Observable（可观察对象）是一个管理异步数据流的强力方式。
    return this.http.get(this.heroesUrl)
    // 利用toPromise操作符把Observable直接转换成Promise对象，
      .toPromise()
      .then(response => {
        return response.json().data as Hero[];
      })
      .catch(this.handleError)
  }

  // 错误处理函数;
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // 根据ID获取
  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //     .then(heroes => {
  //       return heroes.find(hero => hero.id === id);
  //     })
  // }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError)
  }

  // 更新数据;
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  // 添加数据;
  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name}), {headers: this.headers})
      .toPromise()
      .then(result => result.json().data as Hero)
      .catch(this.handleError)
  }

  // 删除；
  deleteHero(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // 模拟请求;
  getHeroesSlowly(): Promise<Array<Hero>> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 300);
    });
  }
}
