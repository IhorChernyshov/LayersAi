import { Component } from '@angular/core';
import {ContactHeaderComponent} from "./contact-header/contact-header.component";
import {ContactItemOneComponent} from "./contact-item-one/contact-item-one.component";
import {ContactItemTwoComponent} from "./contact-item-two/contact-item-two.component";
import {ContactItemThreeComponent} from "./contact-item-three/contact-item-three.component";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactHeaderComponent,
    ContactItemOneComponent,
    ContactItemTwoComponent,
    ContactItemThreeComponent

  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
