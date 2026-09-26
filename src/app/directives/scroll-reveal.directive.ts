import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';

export type RevealAnimation = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input() revealDelay = 0;
  @Input() revealAnimation: RevealAnimation = 'fade-up';

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;

    this.renderer.addClass(element, 'scroll-reveal');
    this.renderer.addClass(element, `scroll-reveal-${this.revealAnimation}`);

    if (this.revealDelay > 0) {
      this.renderer.setStyle(element, '--reveal-delay', `${this.revealDelay}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'scroll-reveal-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'scroll-reveal-visible');
          this.observer?.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
