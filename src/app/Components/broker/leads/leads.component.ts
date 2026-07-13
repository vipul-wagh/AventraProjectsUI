import { Component, OnInit } from '@angular/core';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  leads: any[] = [];

  constructor(private referralService: ReferralService) { }

  ngOnInit(): void {


   //  this.Leads();

  const brokerId = Number(localStorage.getItem('userId'));

  console.log("Broker ID:", brokerId);

  if (brokerId > 0) {
    this.loadLeads(brokerId);
  }

    const userData = localStorage.getItem('user');

    console.log("User Data:", userData);

    if (userData) {

      const user = JSON.parse(userData);

      console.log("Logged User:", user);
      console.log("Broker Id:", user.id);

      this.loadLeads(user.id);
    }
  }

  loadLeads(brokerId: number):void {

    console.log("Calling API with BrokerId:", brokerId);

    this.referralService.getBrokerLeads(brokerId).subscribe({

      next: (res: any) => {

        console.log("API Response:", res);

        this.leads = res;

      },

      error: (err) => {

        console.log("API Error:", err);

      }

    });

  }

 

     

  

}