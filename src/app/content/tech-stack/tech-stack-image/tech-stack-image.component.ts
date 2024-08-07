import {Component, HostBinding, OnInit} from '@angular/core';
import {ScrollAnimateDirective} from "../../../directives/scroll-animate.directive";

@Component({
  selector: 'app-tech-stack-image',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './tech-stack-image.component.html',
  styleUrl: './tech-stack-image.component.scss'
})
export class TechStackImageComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }

}
