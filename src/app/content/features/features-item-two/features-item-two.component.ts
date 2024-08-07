import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-features-item-two',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './features-item-two.component.html',
  styleUrl: './features-item-two.component.scss'
})
export class FeaturesItemTwoComponent {

}
