import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'animate'; // Настраиваемый класс анимации
  @Input() animationDelay = 100; // Задержка анимации по умолчанию 100 мс
  @Input() threshold = 0.5; // Порог видимости по умолчанию 50%

  private observer: IntersectionObserver | any;
  private timeoutId: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        this.timeoutId = window.setTimeout(() => {
          /*REPEATABLE-----ANIMATION*/
         /* this.renderer.addClass(this.el.nativeElement, this.animationClass);
        }, this.animationDelay);*/
          /*ONE-TIME-----ANIMATION*/
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          this.observer.unobserve(this.el.nativeElement); // Отключение наблюдателя после анимации
        }, this.animationDelay);
      } else {
        this.clearTimeout();
        this.renderer.removeClass(this.el.nativeElement, this.animationClass);
      }
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
    this.clearTimeout();
  }

  private clearTimeout() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

}
