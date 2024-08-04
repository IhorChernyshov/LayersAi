import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {HeaderComponent} from "../../Navigation/header/header.component";
import {FooterComponent} from "../../Navigation/footer/footer.component";
import {HeroComponent} from "../hero/hero.component";
import {ProductComponent} from "../product/product.component";
import {TechStackComponent} from "../tech-stack/tech-stack.component";
import {PackageComponent} from "../package/package.component";
import {FeaturesComponent} from "../features/features.component";
import {RoadmapComponent} from "../roadmap/roadmap.component";
import {TeamComponent} from "../team/team.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductComponent,
    TechStackComponent,
    PackageComponent,
    FeaturesComponent,
    RoadmapComponent,
    TeamComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // @ViewChild('parallaxText') parallaxText!: ElementRef;
  //
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const scrollPosition = window.pageYOffset;
  //   this.parallaxText.nativeElement.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
  // }
}
