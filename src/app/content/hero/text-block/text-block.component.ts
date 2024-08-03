import {Component, HostBinding, OnInit} from '@angular/core';
import {VideoChatComponent} from "../video-chat/video-chat.component";

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [
    VideoChatComponent
  ],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss'
})
export class TextBlockComponent implements OnInit {
  @HostBinding('class.load') isLoading = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 10);
  }
}
