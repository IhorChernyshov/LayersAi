import {Component, HostBinding, OnInit} from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-product-text',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './product-text.component.html',
  styleUrl: './product-text.component.scss'
})
export class ProductTextComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
