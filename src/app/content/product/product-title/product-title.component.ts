import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [
    ScrollAnimateDirective
  ],
  templateUrl: './product-title.component.html',
  styleUrl: './product-title.component.scss'
})
export class ProductTitleComponent {

}
