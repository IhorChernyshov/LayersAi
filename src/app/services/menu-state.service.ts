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
    this.setMenuState(!this.menuOpen());
  }

  setMenuState(isOpen: boolean) {
    this.menuOpen.set(isOpen);
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
