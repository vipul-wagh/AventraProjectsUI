import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'aventra-web';

  ngAfterViewInit(): void {
    this.muteAllVideos();

    // Keep muting newly added videos
    const observer = new MutationObserver(() => {
      this.muteAllVideos();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private muteAllVideos(): void {
    document.querySelectorAll('video').forEach((video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      // Force mute whenever video starts playing
      video.onplay = () => {
        video.muted = true;
        video.volume = 0;
      };
    });
  }
}