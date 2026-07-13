import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    UserName: '',
    Password: ''
  };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login(): void {

    this.loginService.login(this.user).subscribe({

      next: (res: any) => {

        // Save login status
        localStorage.setItem('isLoggedIn', 'true');

        // Save user details
        localStorage.setItem('userId', res.id.toString());
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('userTypeId', res.userTypeId.toString());

        // Save user type if available
        if (res.userType) {
          localStorage.setItem('userType', res.userType);
        }

        // Save first login status
        localStorage.setItem('isFirstLogin', res.isFirstLogin.toString());

       // alert('Login Successful');

        // Redirect according to user type
        switch (res.userTypeId) {

          // Admin
          case 1:
            this.router.navigate(['/admin-dashboard'], { replaceUrl: true });
            break;

          // Designer
          case 2:
            this.router.navigate(['/designer-dashboard'], { replaceUrl: true });
            break;

          // Customer
          case 3:
            this.router.navigate(['/hero'], { replaceUrl: true });
            break;

          // Broker
         case 4:

  alert("Broker Login");

  if (res.isFirstLogin === true) {
    alert("Going to Change Password");
    this.router.navigate(['/change-password']);
  } else {
   // alert("Going to Broker Dashboard");
    this.router.navigate(['/broker-dashboard']);
  }

  break;

          // Default
          default:
            this.router.navigate(['/hero'], { replaceUrl: true });
            break;
        }

      },

      error: (err) => {

        console.error(err);
        alert('Invalid Username or Password');

      }

    });

  }

}