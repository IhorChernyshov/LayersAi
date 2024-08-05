import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-roadmap-header',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './roadmap-header.component.html',
  styleUrl: './roadmap-header.component.scss'
})
export class RoadmapHeaderComponent {

}
