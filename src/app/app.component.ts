import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'aventra-web';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
           const url = event.urlAfterRedirects;

       
    // Hide navbar on Landing and Login pages
    this.showNavbar = url !== '/' && url !== '/login'&& url !=='/registration';
      });
  }

  ngAfterViewInit(): void {
    this.muteAllVideos();

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

      video.onplay = () => {
        video.muted = true;
        video.volume = 0;
      };
    });
  }
}