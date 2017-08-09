// title组件;
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './index.component.html'
})
export class TitleComponent {
  @Input()
  subtitle = '';
  title = 'Angular Modules'
}
