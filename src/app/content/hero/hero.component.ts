import {Component, HostBinding, inject, OnInit, Signal} from '@angular/core';
import {TextBlockComponent} from "./text-block/text-block.component";
import {VideoChatComponent} from "./video-chat/video-chat.component";
import {SecondTextBlockComponent} from "./second-text-block/second-text-block.component";
import {HeroTitleComponent} from "./hero-title/hero-title.component";
import {DesignTextComponent} from "./design-text/design-text.component";
import {DesignNumberComponent} from "./design-number/design-number.component";
import {MenuStateService} from "../../services/menu-state.service";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    TextBlockComponent,
    VideoChatComponent,
    SecondTextBlockComponent,
    HeroTitleComponent,
    DesignTextComponent,
    DesignNumberComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;
  @HostBinding('class.loaded') isLoaded = false;
  menuState = inject(MenuStateService)
  isMenuOpen: Signal<boolean> | undefined;
  constructor() {
    this.isMenuOpen = this.menuState.menuOpen$;
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
    }, 2600);
  }
}
