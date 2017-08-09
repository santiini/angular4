// hero详情页;
import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './index.component.html'
})
export class HeroDetailComponent1 {
  // FormControl构造函数接收三个可选参数： 初始值、验证器数组和异步验证器数组。
  name = new FormControl();
}
