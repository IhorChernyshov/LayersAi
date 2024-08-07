import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-features-subtitle',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './features-subtitle.component.html',
  styleUrl: './features-subtitle.component.scss'
})
export class FeaturesSubtitleComponent {

}
