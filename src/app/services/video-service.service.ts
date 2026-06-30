import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

     apiUrl = 'https://localhost:7164/api/Video';

  constructor(private http: HttpClient) { }

    getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }


  getVideo(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


}
