import { Component, OnInit } from '@angular/core';
import { ConsultationFormService } from 'src/app/services/consultation-form.service';
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss']
})
export class InquiriesComponent implements OnInit {

    inquiries: any[] = [];
    
  constructor(private consultationService: ConsultationFormService) { }

  ngOnInit(): void {
     this.loadInquiries();
  }
  

   loadInquiries(): void {
    this.consultationService.getAllInquiries().subscribe({
      next: (response) => {
        this.inquiries = response.data;
      },
      error: (error) => {
        console.error('Error fetching inquiries:', error);
      }
    });
  }

}
