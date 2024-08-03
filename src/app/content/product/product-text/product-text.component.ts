import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-text',
  standalone: true,
  imports: [],
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
