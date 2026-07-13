import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  api="https://localhost:7164/api/Referral";

  constructor(private http:HttpClient) { }

   save(data:any)
  {
    return this.http.post(this.api,data);
  }

   getAll()
  {
    return this.http.get(this.api);
  }

  getBrokerLeads(brokerId: number) {
  return this.http.get(
    `${this.api}/broker/${brokerId}`
  );
}

 // Update Status
  updateStatus(id: number, status: string) {
    return this.http.put(
      `${this.api}/status/${id}`,
      { status: status }
    );
  }



}
