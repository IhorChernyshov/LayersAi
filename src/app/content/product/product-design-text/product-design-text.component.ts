import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-design-text',
  standalone: true,
  imports: [],
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
