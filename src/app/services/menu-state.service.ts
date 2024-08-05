import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

 private menuOpen = signal(false);


  constructor() { }

  get menuOpen$() {
    return this.menuOpen;
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  setMenuState(isOpen: boolean) {
    this.menuOpen.set(isOpen);
  }
}
