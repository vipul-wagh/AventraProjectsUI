import { Component, OnInit } from '@angular/core';
import { ConsultationFormService } from 'src/app/services/consultation-form.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

   bookings: any[] = [];

    userName = localStorage.getItem('userName') || '';

  constructor(private consultationService: ConsultationFormService) { }

  ngOnInit(): void {
     this.loadBookings();
  }

    loadBookings() {
    this.consultationService.getMyBookings(this.userName)
      .subscribe({
        next: (data) => {
          this.bookings = data;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
