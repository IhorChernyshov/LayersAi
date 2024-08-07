import {Component, HostBinding, OnInit} from '@angular/core';
import {PackageHeaderComponent} from "./package-header/package-header.component";
import {PackageTitleComponent} from "./package-title/package-title.component";
import {PackageItemOneComponent} from "./package-item-one/package-item-one.component";
import {PackageItemTwoComponent} from "./package-item-two/package-item-two.component";
import {PackageMessageTitleComponent} from "./package-message-title/package-message-title.component";
import {PackageMessageComponent} from "./package-message/package-message.component";
import {ScrollAnimateDirective} from "../../directives/scroll-animate.directive";


@Component({
  selector: 'app-package',
  standalone: true,
    imports: [
        PackageHeaderComponent,
        PackageTitleComponent,
        PackageItemOneComponent,
        PackageItemTwoComponent,
        PackageMessageTitleComponent,
        PackageMessageComponent,
        ScrollAnimateDirective

    ],
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }

}
