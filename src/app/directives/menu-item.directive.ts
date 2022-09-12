import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[menu-item]'
})
export class MenuItemDirective {
  element: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
    this.element = this.el.nativeElement;
  }
}
