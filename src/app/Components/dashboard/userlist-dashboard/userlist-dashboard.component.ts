import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'; // Update the path if needed

@Component({
  selector: 'app-userlist-dashboard',
  templateUrl: './userlist-dashboard.component.html',
  styleUrls: ['./userlist-dashboard.component.scss']
})
export class UserlistDashboardComponent implements OnInit {
   userName: string = '';
  users: any[] = [];
  searchText: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
      this.userName = localStorage.getItem('userName') || 'Admin';
  }

  loadUsers() {
    this.userService. getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
      },
      error: (err) => {
        console.error('Error loading users', err);
      }
    });
  }

  get adminCount(): number {
    return this.users.filter(x => x.userType === 'Admin').length;
  }

  get brokerCount(): number {
    return this.users.filter(x => x.userType === 'Broker').length;
  }

  get customerCount(): number {
    return this.users.filter(x => x.userType === 'Customer').length;
  }

    get designerCount(): number {
    return this.users.filter(x => x.userType === 'Designer').length;
  }

  filteredUsers() {
    if (!this.searchText) {
      return this.users;
    }

    return this.users.filter(user =>
      user.userName?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.userType?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}