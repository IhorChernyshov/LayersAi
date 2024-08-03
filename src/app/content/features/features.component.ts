import {Component, HostBinding, OnInit} from '@angular/core';
import {FeaturesHeaderComponent} from "./features-header/features-header.component";
import {FeaturesTitleComponent} from "./features-title/features-title.component";
import {FeaturesSubtitleComponent} from "./features-subtitle/features-subtitle.component";
import {FeaturesItemOneComponent} from "./features-item-one/features-item-one.component";
import {FeaturesItemTwoComponent} from "./features-item-two/features-item-two.component";
import {FeaturesAusComponent} from "./features-aus/features-aus.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    FeaturesHeaderComponent,
    FeaturesTitleComponent,
    FeaturesSubtitleComponent,
    FeaturesItemOneComponent,
    FeaturesItemTwoComponent,
    FeaturesAusComponent
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }

}
