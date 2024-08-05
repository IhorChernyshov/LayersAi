import {Directive, HostListener, Input} from '@angular/core';
import {SmoothClickService} from "../services/smooth-click.service";

@Directive({
  selector: '[appClickSmooth]',
  standalone: true
})
export class ClickSmoothDirective {

  @Input('appClickSmooth') targetElementId: string | any;

  constructor(private scrollService: SmoothClickService) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.scrollService.smoothScroll(this.targetElementId);
  }

}
