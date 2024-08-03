import {Component, HostBinding, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @HostBinding('class.load') isLoading = false;

  constructor() { }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
