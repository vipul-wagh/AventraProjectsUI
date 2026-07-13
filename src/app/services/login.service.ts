import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private apiUrl = "https://localhost:7164/api/Login";
  constructor(private http: HttpClient) { }

  login(data: any) {

    return this.http.post(this.apiUrl + "/login", data);

  }


  changePassword(data: any) {

    return this.http.put(this.apiUrl + "/change-password", data);

  }

}
