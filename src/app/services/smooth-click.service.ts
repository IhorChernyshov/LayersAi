import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class SmoothClickService {


  /*------------Smooth Click Ease-In-Out-------------------------------------------------*/

  smoothScroll(targetElementId: string): void {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const startingY = window.scrollY;
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
      const distance = targetY - startingY;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const duration = 1000; // Adjust duration for desired animation time
        const easing = easeInOutQuad(elapsedTime / duration);
        const y = easing * distance + startingY;

        window.scrollTo(0, y);

        if (elapsedTime < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }

  /*------------Smooth Click Ease-In-------------------------------------------------*/
  /*smoothScroll(targetElementId: string): void {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const startingY = window.scrollY;
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
      const distance = targetY - startingY;
      let startTime: number | null = null;

      const easeInQuad = (t: number) => t * t;

      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const duration = 700; // Adjust duration for desired animation time
        const easing = easeInQuad(elapsedTime / duration);
        const y = easing * distance + startingY;

        window.scrollTo(0, y);

        if (elapsedTime < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }*/
}
