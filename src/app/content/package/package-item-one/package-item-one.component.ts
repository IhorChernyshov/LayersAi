import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-package-item-one',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './package-item-one.component.html',
  styleUrl: './package-item-one.component.scss'
})
export class PackageItemOneComponent {

}
