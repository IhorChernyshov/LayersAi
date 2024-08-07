import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-features-item-one',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './features-item-one.component.html',
  styleUrl: './features-item-one.component.scss'
})
export class FeaturesItemOneComponent {

}
