import {Component, HostBinding, OnInit} from '@angular/core';
import {ProductHeaderComponent} from "./product-header/product-header.component";
import {ProductTextComponent} from "./product-text/product-text.component";
import {ProductInputComponent} from "./product-input/product-input.component";
import {ProductTitleComponent} from "./product-title/product-title.component";
import {ProductBgDesignComponent} from "./product-bg-design/product-bg-design.component";
import {ProductDesignTextComponent} from "./product-design-text/product-design-text.component";
import {ProductLogoComponent} from "./product-logo/product-logo.component";
import {DynamicAdaptDirective} from "../../directives/dynamic-adapt.directive";
import {ScrollAnimateDirective} from "../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ProductHeaderComponent,
    ProductTextComponent,
    ProductInputComponent,
    ProductTitleComponent,
    ProductBgDesignComponent,
    ProductDesignTextComponent,
    ProductLogoComponent,
    DynamicAdaptDirective,
    ScrollAnimateDirective
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }

}
