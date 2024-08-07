import { Component } from '@angular/core';
import {TeamTitleComponent} from "./team-title/team-title.component";
import {TeamHeaderComponent} from "./team-header/team-header.component";
import {TeamImagesComponent} from "./team-images/team-images.component";
import {ScrollAnimateDirective} from "../../directives/scroll-animate.directive";

@Component({
  selector: 'app-team',
  standalone: true,
    imports: [
        TeamTitleComponent,
        TeamHeaderComponent,
        TeamImagesComponent,
        ScrollAnimateDirective
    ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
