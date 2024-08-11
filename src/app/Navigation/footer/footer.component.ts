import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../directives/scroll-animate.directive";
import {ClickSmoothDirective} from "../../directives/click-smooth.directive";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        ScrollAnimateDirective,
        ClickSmoothDirective
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
