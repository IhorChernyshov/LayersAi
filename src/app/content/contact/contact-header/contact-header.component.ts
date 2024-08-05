import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-contact-header',
  standalone: true,
  imports: [
    RouterLink,
    ClickSmoothDirective
  ],
  templateUrl: './contact-header.component.html',
  styleUrl: './contact-header.component.scss'
})
export class ContactHeaderComponent {
  smoothScroll(targetElementId: string): void {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const startingY = window.scrollY;
      const targetY = targetElement.offsetTop;
      const distance = targetY - startingY;
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const ease = elapsedTime / 500; // Adjust 500 for desired animation duration
        const y = ease * distance + startingY;
        window.scrollTo(0, y);

        if (ease < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }
}
