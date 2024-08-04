import {Component, HostBinding, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-item-two',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './contact-item-two.component.html',
  styleUrl: './contact-item-two.component.scss'
})
export class ContactItemTwoComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;


  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }

}
