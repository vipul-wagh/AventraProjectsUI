import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    videoUrl: string = '';
  constructor(private videoService: VideoServiceService) { }

  ngOnInit(): void {

       // Hero video has Id = 1
      
    this.videoService.getVideo(1).subscribe({
      next: (res: any) => {
        this.videoUrl = 'https://localhost:7164/' + res.videoUrl;
      },
      error: (err:any) => {
        console.log(err);
      }
    });
  }
   ngAfterViewInit() {
  const video = document.querySelector('video');
  if (video) {
    video.muted = true;
    video.volume = 0;
  }
}
}

