import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-chat',
  standalone: true,
  imports: [],
  templateUrl: './video-chat.component.html',
  styleUrl: './video-chat.component.scss'
})
export class VideoChatComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
