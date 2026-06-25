import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { ConsultationFormService } from 'src/app/services/consultation-form.service';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultationForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private consultationService: ConsultationFormService
  ) { }


  ngOnInit(): void {
   this.consultationForm = this.fb.group({
  fullName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', Validators.required],
  serviceType: ['', Validators.required],
  message: ['', Validators.required]
});
  }

  get f() {
    return this.consultationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.consultationForm.invalid) {
      return;
    }

    this.consultationService.createConsultation(this.consultationForm.value)
      .subscribe({
        next: () => {
          this.successMessage = 'Consultation request submitted successfully!';
          this.consultationForm.reset();
          this.submitted = false;
        },
        error: () => {
          this.errorMessage = 'Something went wrong. Please try again later.';
        }
      });
  }


    ngAfterViewInit() {
  const video = document.querySelector('video');
  if (video) {
    video.muted = true;
    video.volume = 0;
  }
}
}
