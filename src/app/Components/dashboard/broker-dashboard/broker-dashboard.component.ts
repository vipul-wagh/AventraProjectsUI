import { Component, OnInit } from '@angular/core';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-broker-dashboard',
  templateUrl: './broker-dashboard.component.html',
  styleUrls: ['./broker-dashboard.component.scss']
})
export class BrokerDashboardComponent implements OnInit {

  leads: any[] = [];

  totalLeads = 0;
  approvedLeads = 0;
  pendingLeads = 0;
  rejectedLeads = 0;

  brokerName = '';

  constructor(private referralService: ReferralService) { }

  ngOnInit(): void {

    // Get logged-in broker details
    const brokerId = Number(localStorage.getItem('userId'));
    this.brokerName = localStorage.getItem('userName') || '';

    console.log('Broker ID:', brokerId);

    if (brokerId > 0) {
      this.loadLeads(brokerId);
    } else {
      console.error('Broker ID not found in localStorage');
    }
  }

  loadLeads(brokerId: number): void {

    this.referralService.getBrokerLeads(brokerId).subscribe({

      next: (res: any) => {

        console.log('API Response:', res);

        this.leads = res;

        this.calculateDashboard();
      },

      error: (err) => {

        console.error('API Error:', err);

      }

    });

  }

  calculateDashboard(): void {

    this.totalLeads = this.leads.length;

    this.approvedLeads = this.leads.filter(x => x.status === 'Approved').length;

    this.pendingLeads = this.leads.filter(x => x.status === 'Pending').length;

    this.rejectedLeads = this.leads.filter(x => x.status === 'Rejected').length;

  }

}