import { Component, OnInit } from '@angular/core';
import { ReferralService } from 'src/app/services/referral.service';
@Component({
  selector: 'app-all-leads',
  templateUrl: './all-leads.component.html',
  styleUrls: ['./all-leads.component.scss']
})
export class AllLeadsComponent implements OnInit {

  leads: any[] = [];
  constructor(private referralService: ReferralService) { }

  ngOnInit(): void {
     this.loadAllLeads();
  }

  loadAllLeads(): void {
    this.referralService.getAll().subscribe({
      next: (res: any) => {
        this.leads = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



   updateStatus(id: number, status: string) {

  this.referralService.updateStatus(id, status).subscribe({

    next: () => {

      const lead = this.leads.find((x: any) => x.id === id);

      if (lead) {
        lead.status = status;
      }

      alert("Status Updated Successfully");
    },

    error: (err) => {
      console.log(err);
      alert("Failed to update status");
    }

  });

}
}
