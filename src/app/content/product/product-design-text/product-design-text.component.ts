import {Component, HostBinding, OnInit} from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product-design-text',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './product-design-text.component.html',
  styleUrl: './product-design-text.component.scss'
})
export class ProductDesignTextComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
