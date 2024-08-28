import { Component } from '@angular/core';
import {ClickSmoothDirective} from "../../../directives/click-smooth.directive";

@Component({
  selector: 'app-package-item-two',
  standalone: true,
  imports: [
    ClickSmoothDirective
  ],
  templateUrl: './package-item-two.component.html',
  styleUrl: './package-item-two.component.scss'
})
export class PackageItemTwoComponent {

}
