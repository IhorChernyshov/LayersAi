import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-tech-stack-header',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './tech-stack-header.component.html',
  styleUrl: './tech-stack-header.component.scss'
})
export class TechStackHeaderComponent {

}
