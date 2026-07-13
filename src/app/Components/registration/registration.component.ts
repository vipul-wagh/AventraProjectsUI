import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/models/registration';
import { UserType } from 'src/app/models/user-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  showPassword = false;

  user: User = {
     Id: 0,
    UserName: '',
     LastName: '',
    Email: '',
     MobileNumber: '',
    Address: '',
    Password: '',
    UserTypeId: 0
  };

  userTypes: UserType[] = [];

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.loadUserTypes();
  }

  loadUserTypes(): void {
    this.registrationService.getUserTypes().subscribe({
      next: (data) => {
        this.userTypes = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  register(): void {
    console.log(this.user);

    if (this.user.UserTypeId == 0) {
      alert("Please select User Type");
      return;
    }

    this.registrationService.register(this.user).subscribe({
      next: () => {
        alert("Registration Successful");
         this.router.navigate(['/hero']);
        this.user = {
           Id: 0,
          UserName: '',
           LastName: '',
          Email: '',
          MobileNumber: '',
          Address: '',
          Password: '',
          UserTypeId: 0
        };
      },
     error: (err) => {

  console.log("Complete Error");
  console.log(err);

  console.log("Status");
  console.log(err.status);

  console.log("Response");
  console.log(err.error);

  alert("Registration Failed");

}
    });

  }
}