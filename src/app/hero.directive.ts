import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHero]',
})
export class HeroDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') background: string = '#c4c3c3';

  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      '#2b76f6'
    );
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      '#c4c3c3'
    );
  }
}
