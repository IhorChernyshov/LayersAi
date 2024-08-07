import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-contact-item-one',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './contact-item-one.component.html',
  styleUrl: './contact-item-one.component.scss'
})
export class ContactItemOneComponent {

}
