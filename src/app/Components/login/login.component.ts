import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

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


  constructor( private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {}


    login() {

    this.loginService.login(this.user).subscribe({

      next: (res) => {

        alert("Login Successful");

        this.router.navigate(['/hero']);

      },

       error: (err) => {

        alert("Invalid Username or Password");

      }

    });

  }



}
