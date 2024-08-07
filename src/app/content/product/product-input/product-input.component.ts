import { Component } from '@angular/core';
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
export class ProductInputComponent {

}
