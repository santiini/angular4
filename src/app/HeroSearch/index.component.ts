// hero-search;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


// 大部分RxJS操作符都不包括在Angular的Observable基本实现中，基本实现只包括Angular本身所需的功能。
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from '../hero-search.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-search',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [
    HeroSearchService
  ]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  // Subject（主题）是一个可观察的事件流中的生产者。 searchTerms生成一个产生字符串的Observable，用作按名称搜索时的过滤条件。
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ){}

  // Push a search term into the observable stream.
  search(term: string): void {
    // 每当调用search()时都会调用next()来把新的字符串放进该主题的可观察流中。
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // Subject也是一个Observable对象。 我们要把搜索词的流转换成Hero数组的流，并把结果赋值给heroes属性。
    this.heroes = this.searchTerms
    // 在传出最终字符串之前，debounceTime(300)将会等待，直到新增字符串的事件暂停了 300 毫秒。 我们实际发起请求的间隔永远不会小于 300ms。
      .debounceTime(3000)
    // distinctUntilChanged确保只在过滤条件变化时才发送请求， 这样就不会重复请求同一个搜索词了。
      .distinctUntilChanged()
    // switchMap()会为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
      .switchMap(term => {
         // return the http search observable
        return term ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
          : Observable.of<Hero[]>([])
      })
      .catch(error => {
        console.log(error)
        return Observable.of<Hero[]>([]);
      })
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
