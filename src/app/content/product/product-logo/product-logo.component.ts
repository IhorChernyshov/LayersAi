import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product-logo',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './product-logo.component.html',
  styleUrl: './product-logo.component.scss'
})
export class ProductLogoComponent {

}
