import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../directives/scroll-animate.directive";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
