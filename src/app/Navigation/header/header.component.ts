import {Component, HostBinding, HostListener, inject, OnInit, Signal} from '@angular/core';
import {NgClass} from "@angular/common";
import {DynamicAdaptDirective} from "../../directives/dynamic-adapt.directive";
import {MenuStateService} from "../../services/menu-state.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ClickSmoothDirective} from "../../directives/click-smooth.directive";
import {ScrollDirectionDirective} from "../../directives/scroll-direction.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    DynamicAdaptDirective,
    RouterLinkActive,
    RouterLink,
    ClickSmoothDirective,
    ScrollDirectionDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @HostBinding('class.load') isLoading = false;
  isHeaderMove = false;
  @HostListener('document: scroll')
  scrollFunction() {
    this.isHeaderMove = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    console.log('Scroll: ', document.documentElement.scrollTop);
  }
  menuState = inject(MenuStateService)
   // isMenuOpen = false;
  isMenuOpen: Signal<boolean> | undefined;
  constructor() {
    this.isMenuOpen = this.menuState.menuOpen$;
  }



  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);

  }

  toggleMenu() {
        this.menuState.toggleMenu()

    }
}
