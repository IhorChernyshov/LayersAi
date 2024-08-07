import {Directive, HostListener, inject, Input} from '@angular/core';
import {SmoothClickService} from "../services/smooth-click.service";
import {MenuStateService} from "../services/menu-state.service";

@Directive({
  selector: '[appClickSmooth]',
  standalone: true
})
export class ClickSmoothDirective {

  @Input('appClickSmooth') targetElementId: string | any;

  constructor(private scrollService: SmoothClickService) {}
  menuState = inject(MenuStateService);
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.menuState.setMenuState(false); // Закрываем меню
    this.scrollService.smoothScroll(this.targetElementId);
  }

}
