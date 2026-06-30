import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/Service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    private baseUrl = 'https://localhost:7164/api/Services';
  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl);
  }




}
