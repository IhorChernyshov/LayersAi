import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-roadmap-title',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './roadmap-title.component.html',
  styleUrl: './roadmap-title.component.scss'
})
export class RoadmapTitleComponent {

}
