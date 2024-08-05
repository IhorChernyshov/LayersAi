import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss'
})
export class ProductHeaderComponent {

}
