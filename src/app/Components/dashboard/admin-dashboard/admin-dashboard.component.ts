import { Component, OnInit } from '@angular/core';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  leads: any[] = [];

  totalLeads = 0;
  approvedLeads = 0;
  rejectedLeads = 0;
  pendingLeads = 0;
  totalProjectValue = 0;

  constructor(private referralService: ReferralService) { }

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads(): void {

    this.referralService.getAll().subscribe({

      next: (res: any) => {

        this.leads = res;
        this.calculateDashboard();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  calculateDashboard(): void {

    this.totalLeads = this.leads.length;

    this.approvedLeads =
      this.leads.filter(x => x.status === 'Approved').length;

    this.rejectedLeads =
      this.leads.filter(x => x.status === 'Rejected').length;

    this.pendingLeads =
      this.leads.filter(x => x.status === 'Pending').length;

     // Total Project Value (Approved Leads Only)
    this.totalProjectValue = this.leads
      .filter(x => x.status === 'Approved')
      .reduce((sum, x) => sum + Number(x.projectValue || 0), 0);
  }

  updateStatus(id: number, status: string): void {

    this.referralService.updateStatus(id, status).subscribe({

      next: () => {

        const lead = this.leads.find(x => x.id === id);

        if (lead) {
          lead.status = status;
        }

        this.calculateDashboard();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}