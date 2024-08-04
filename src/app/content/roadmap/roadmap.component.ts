import {Component, HostBinding, OnInit} from '@angular/core';
import {RoadmapTitleComponent} from "./roadmap-title/roadmap-title.component";
import {RoadmapHeaderComponent} from "./roadmap-header/roadmap-header.component";
import {RoadmapTabletComponent} from "./roadmap-tablet/roadmap-tablet.component";
import {RoadmapMianLineComponent} from "./roadmap-mian-line/roadmap-mian-line.component";
import {RoadmapBgComponent} from "./roadmap-bg/roadmap-bg.component";
import {RoadmapDesignTxtComponent} from "./roadmap-design-txt/roadmap-design-txt.component";

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [
    RoadmapTitleComponent,
    RoadmapHeaderComponent,
    RoadmapTabletComponent,
    RoadmapMianLineComponent,
    RoadmapBgComponent,
    RoadmapDesignTxtComponent
  ],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
