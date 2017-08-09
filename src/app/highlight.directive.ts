// 一个属性型指令，它会设置所在元素的背景色。

// 1. Directive提供@Directive装饰器功能。
// 2. ElementRef注入到指令构造函数中。这样代码就可以访问 DOM 元素了。
// 3. Input将数据从绑定表达式传达到指令中。
// 4. 使用HostListener装饰器添加两个事件处理器.
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
// /** Highlight the attached element in gold */
//  导出指令的类;
export class HighlightDirective {
  // ElementRef是一个服务，它赋予我们通过它的nativeElement属性直接访问 DOM 元素的能力。
  // Renderer服务允许通过代码设置元素的样式。
  // constructor(el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'gold';
  //   console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
  // }

  // 构造函数;
  constructor(private el: ElementRef){}

  // 属性处理;
  // 注意看@Input装饰器。它往类上添加了一些元数据，从而让该指令的highlightColor能用于绑定。
  // 它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular就会拒绝绑定，
  @Input('myHighlight')
  // 在指令内部，该属性叫highlightColor，在外部，当我们绑定到它时，它叫myHighlight;
  highlightColor: string;

  @Input()
  defaultColor: string;

  // 必须正确的书写事件监听器。
  @HostListener('mouseenter')
  onmouseenter() {
    // this.highlight('yellow');
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.highlight(null);
  }

  // 私有方法;
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
