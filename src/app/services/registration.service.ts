import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/registration';
import { Router } from '@angular/router';
import { UserType } from '../models/user-type';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 private apiUrl = 'https://localhost:7164/api/Login/register';
 private userTypeUrl = 'https://localhost:7164/api/UserType';

  constructor(private http: HttpClient,private router: Router) {}

    register(user: User) {
    return this.http.post(this.apiUrl, user, {
      responseType: 'text'
    });

  }

    getUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.userTypeUrl);
  }
}
