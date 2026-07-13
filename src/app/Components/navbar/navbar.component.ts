import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  userTypeId: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.checkLoginStatus();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLoginStatus();
      });
  }

  checkLoginStatus(): void {

    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (this.isLoggedIn) {
      this.userTypeId = Number(localStorage.getItem('userTypeId'));
    } else {
      this.userTypeId = 0;
    }
  }

  logout(): void {

    localStorage.clear();   // Clears all login data

    this.isLoggedIn = false;
    this.userTypeId = 0;

    this.router.navigate(['/login']);
  }

}