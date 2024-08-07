import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-features-aus',
  standalone: true,
  imports: [
    ScrollAnimateDirective
  ],
  templateUrl: './features-aus.component.html',
  styleUrl: './features-aus.component.scss'
})
export class FeaturesAusComponent {

    protected readonly document = document;
}
