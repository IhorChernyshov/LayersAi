import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-package-title',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './package-title.component.html',
  styleUrl: './package-title.component.scss'
})
export class PackageTitleComponent {

}
