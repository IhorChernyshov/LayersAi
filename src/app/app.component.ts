import {AfterViewInit, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./content/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
/*export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const cursorDot = document.querySelector('[data-cursor-dot]') as HTMLElement;
    const cursorLine = document.querySelector('[data-cursor-line]') as HTMLElement;

    window.addEventListener('mousemove', (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
     /!* if (cursorLine) {
        cursorLine.style.left = `${posX}px`;
        cursorLine.style.top = `${posY}px`;
      }*!/

      cursorLine.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {duration: 300, fill: 'forwards'})

    });
  }*/
}
