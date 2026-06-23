import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroContent } from '../models/hero-content';

@Injectable({
  providedIn: 'root'
})
export class HeroContentService {

  private apiUrl = 'https://localhost:7164/api/HeroContent';

  constructor(private http: HttpClient) { }

  getHeroContent(): Observable<HeroContent> {
    return this.http.get<HeroContent>(this.apiUrl);
  }
}