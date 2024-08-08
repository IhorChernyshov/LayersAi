import {Component, OnInit} from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product-input',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './product-input.component.html',
  styleUrl: './product-input.component.scss'
})
export class ProductInputComponent  implements OnInit {
  texts: string[] = [
    'AI search and analysis across over 200,000 Australian laws',
    'Find the information you need quickly and easily',
    'Find the information you need quickly and easily',
    'Analyze laws with advanced AI technology'
  ];
  currentTextIndex = 0;
  currentText = this.texts[this.currentTextIndex];
  nextTextIndex = (this.currentTextIndex + 1) % this.texts.length;
  nextText = this.texts[this.nextTextIndex];
  showCurrentText = true;

  ngOnInit() {
    setInterval(() => {
      this.showCurrentText = false;

      setTimeout(() => {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentTextIndex];
        this.nextTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.nextText = this.texts[this.nextTextIndex];
        this.showCurrentText = true;
      }, 500); // Время должно соответствовать времени анимации
    }, 5000);
  }
}
