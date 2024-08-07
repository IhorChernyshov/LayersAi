import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-title',
  standalone: true,
  imports: [],
  templateUrl: './hero-title.component.html',
  styleUrl: './hero-title.component.scss'
})
export class HeroTitleComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;
@HostBinding('class.loaded') isLoaded = false;
  constructor() {
  }

 ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
    setTimeout(() => {
      if (this.isLoading) {
        this.isLoading = false;
        this.isLoaded = true;
      }
    }, 2050);
  }
}
