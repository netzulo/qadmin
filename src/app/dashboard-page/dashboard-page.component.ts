import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from '../login.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  user: User;

  constructor(private router: Router, private login: LoginService) {
    this.user = this.login.getUser();
  }

  ngOnInit() {
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }

}
