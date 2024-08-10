import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-chat',
  standalone: true,
  imports: [],
  templateUrl: './video-chat.component.html',
  styleUrl: './video-chat.component.scss'
})
export class VideoChatComponent implements OnInit, AfterViewInit {
  @HostBinding('class.load') isLoading = false;
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | any;

  constructor() {
  }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = true;
    }, 10);

  }

  ngAfterViewInit() {
    this.isLoading = true;
    this.videoPlayer.nativeElement.muted = true; // Убедитесь, что видео отключено
    this.videoPlayer.nativeElement.play().catch((error: any) => {
      console.log('Autoplay was prevented:', error);
      this.videoPlayer.nativeElement.addEventListener('click', () => {
        this.videoPlayer.nativeElement.play();
      });
    });
  }
}
