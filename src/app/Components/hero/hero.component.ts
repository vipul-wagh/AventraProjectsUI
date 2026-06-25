import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   ngAfterViewInit() {
  const video = document.querySelector('video');
  if (video) {
    video.muted = true;
    video.volume = 0;
  }
}
}

