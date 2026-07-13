import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-refer-client',
  templateUrl: './refer-client.component.html',
  styleUrls: ['./refer-client.component.scss']
})
export class ReferClientComponent implements OnInit {

  referralForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private referralService: ReferralService
  ) { }

  ngOnInit(): void {

    // Create Form
    this.referralForm = this.fb.group({

      brokerId: [null, Validators.required],

        brokerName: [''],

      clientName: ['', Validators.required],

      clientMobile: [
        '',
        [
          Validators.required,
          Validators.pattern("^[0-9]{10}$")
        ]
      ],

      projectLocation: ['', Validators.required],

      propertyType: ['', Validators.required],

      status: ['Pending'],

      projectValue: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      leadDate: [
        this.getTodayDate(),
        Validators.required
      ]

    });

    this.loadBrokerDetails();
  }

  // Get Today's Date
  getTodayDate(): string {

    const today = new Date();

    return today.toISOString().substring(0, 10);

  }

  // Load Logged-in Broker
 
loadBrokerDetails(): void {

  const userId = localStorage.getItem('userId');
   const userName = localStorage.getItem('userName');

  console.log("User ID from localStorage:", userId);
  console.log(userName);

  if (userId && userName) {

    this.referralForm.patchValue({
      brokerId: Number(userId),
      brokerName: userName,
      status: 'Pending'

    });

    console.log("Broker ID set to:", Number(userId));

  } else {

    console.log("No userId found in localStorage");

    alert("Please login again.");

  }

}

  // Easy access for validation
  get f() {
    return this.referralForm.controls;
  }

  // Save Referral
  saveReferral(): void {

    this.submitted = true;

    if (this.referralForm.invalid) {
      return;
    }

    console.log(this.referralForm.value);

    this.referralService.save(this.referralForm.value)
      .subscribe({

        next: (response) => {

          alert("Referral Added Successfully");

          // Keep Broker Details
          const brokerId = this.referralForm.value.brokerId;
          const brokerName = this.referralForm.value.brokerName;

          this.referralForm.reset();

          this.submitted = false;

          this.referralForm.patchValue({

            brokerId: brokerId,

            brokerName: brokerName,

            status: 'Pending',

            leadDate: this.getTodayDate()

          });

        },

        error: (error) => {

          console.log(error);

          alert("Something went wrong.");

        }

      });

  }

  // Reset Form
  resetForm(): void {

    this.submitted = false;

    const brokerId = this.referralForm.value.brokerId;
    const brokerName = this.referralForm.value.brokerName;

    this.referralForm.reset();

    this.referralForm.patchValue({

      brokerId: brokerId,

      brokerName: brokerName,

      status: 'Pending',

      leadDate: this.getTodayDate()

    });

  }

}