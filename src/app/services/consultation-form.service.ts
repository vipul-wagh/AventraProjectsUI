import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from '../models/consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationFormService {
private baseUrl = 'https://localhost:7164/api/Consultation';
  constructor(private http: HttpClient)  {}
    createConsultation(data: Consultation): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

      getAll(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.baseUrl);
       }
    }
