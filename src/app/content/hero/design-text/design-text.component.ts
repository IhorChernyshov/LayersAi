import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-design-text',
  standalone: true,
  imports: [],
  templateUrl: './design-text.component.html',
  styleUrl: './design-text.component.scss'
})
export class DesignTextComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}

