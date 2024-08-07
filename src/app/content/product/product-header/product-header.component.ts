import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [
    ClickSmoothDirective,
    ScrollAnimateDirective
  ],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss'
})
export class ProductHeaderComponent {

}
