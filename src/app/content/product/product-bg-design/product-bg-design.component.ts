import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-bg-design',
  standalone: true,
  imports: [],
  templateUrl: './product-bg-design.component.html',
  styleUrl: './product-bg-design.component.scss'
})
export class ProductBgDesignComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }

}
