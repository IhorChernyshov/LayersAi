import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-features-title',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './features-title.component.html',
  styleUrl: './features-title.component.scss'
})
export class FeaturesTitleComponent {

}
