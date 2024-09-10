import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./content/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// export class AppComponent  {
export class AppComponent implements AfterViewInit {

  @ViewChild('cursorDot') cursorDot!: ElementRef;
  @ViewChild('cursorLine') cursorLine!: ElementRef;
  ngAfterViewInit(): void {
 /*   const cursorDot = document.querySelector('[data-cursor-dot]') as HTMLElement;
    const cursorLine = document.querySelector('[data-cursor-line]') as HTMLElement;*/

    window.addEventListener('mousemove', (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (this.cursorDot) {
        this.cursorDot.nativeElement.style.left = `${posX}px`;
        this.cursorDot.nativeElement.style.top = `${posY}px`;
      }
     /* if (cursorLine) {
        cursorLine.style.left = `${posX}px`;
        cursorLine.style.top = `${posY}px`;
      }*/

      this.cursorLine.nativeElement.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {duration: 300, fill: 'forwards'})

    });
  }
}
