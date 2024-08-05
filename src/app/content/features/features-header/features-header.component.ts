import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";


@Component({
  selector: 'app-features-header',
  standalone: true,
  imports: [
    ClickSmoothDirective

  ],
  templateUrl: './features-header.component.html',
  styleUrl: './features-header.component.scss'
})
export class FeaturesHeaderComponent {

}
