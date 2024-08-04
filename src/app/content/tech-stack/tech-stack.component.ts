import {Component, HostBinding, OnInit} from '@angular/core';
import {TechStackHeaderComponent} from "./tech-stack-header/tech-stack-header.component";
import {TechStackItemsComponent} from "./tech-stack-items/tech-stack-items.component";
import {TechStackImageComponent} from "./tech-stack-image/tech-stack-image.component";


@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [
    TechStackHeaderComponent,
    TechStackItemsComponent,
    TechStackImageComponent
  ],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
