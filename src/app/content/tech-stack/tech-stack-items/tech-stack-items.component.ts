import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-tech-stack-items',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './tech-stack-items.component.html',
  styleUrl: './tech-stack-items.component.scss'
})
export class TechStackItemsComponent {

}
