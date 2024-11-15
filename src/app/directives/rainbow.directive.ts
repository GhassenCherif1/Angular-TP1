import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
  standalone: true
})
export class RainbowDirective {

  private element = inject(ElementRef);
  @HostBinding('style.color') color = 'yellow';
  @HostBinding('style.border-color') bc = 'yellow';
  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  @HostListener('keyup') onKeyUp() {
    const randomColor = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[randomColor];
    this.bc = this.colors[randomColor];
  }

}
