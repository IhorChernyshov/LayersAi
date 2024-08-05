import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-package-header',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './package-header.component.html',
  styleUrl: './package-header.component.scss'
})
export class PackageHeaderComponent {

}
