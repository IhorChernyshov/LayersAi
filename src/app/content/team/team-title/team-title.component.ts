import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-team-title',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './team-title.component.html',
  styleUrl: './team-title.component.scss'
})
export class TeamTitleComponent {

}
