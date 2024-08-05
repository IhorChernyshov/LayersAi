import { Component } from '@angular/core';
import {RoadmapBgComponent} from "../roadmap-bg/roadmap-bg.component";

@Component({
  selector: 'app-roadmap-mian-line',
  standalone: true,
  imports: [
    RoadmapBgComponent
  ],
  templateUrl: './roadmap-mian-line.component.html',
  styleUrl: './roadmap-mian-line.component.scss'
})
export class RoadmapMianLineComponent {

    protected readonly document = document;
}
