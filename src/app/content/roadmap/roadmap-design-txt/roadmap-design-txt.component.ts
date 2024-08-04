import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-roadmap-design-txt',
  standalone: true,
  imports: [],
  templateUrl: './roadmap-design-txt.component.html',
  styleUrl: './roadmap-design-txt.component.scss'
})
export class RoadmapDesignTxtComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
