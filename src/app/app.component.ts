// 项目根组件;
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 [myHighlight]="color">{{title}}</h1>
    <h1 [myHighlight]="color" defaultColor="violet">Highlight测试</h1>
    <h1>My First Attribute Directive</h1>

<h4>Pick a highlight color</h4>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
<p [myHighlight]="color">Highlight me!</p>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: string = 'Tour of Heroes';
  color: string;
}
