import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-team-header',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.scss'
})
export class TeamHeaderComponent {

}
