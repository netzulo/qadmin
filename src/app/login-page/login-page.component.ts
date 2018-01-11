import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input()
  public alerts: Array<IAlert> = [];

  constructor(private router: Router, private login: LoginService) {
  }

  ngOnInit() {
  }


  signIn(e) {
    e.preventDefault();
    const user_name = e.target.elements[0].value;
    const user_pass = e.target.elements[1].value;
    const isAuth = this.login.singIn(user_name, user_pass);
    if (isAuth) {
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Login success',
      });
      this.router.navigate(['dashboard']);
    }
    this.alerts.push({
      id: 2,
      type: 'warning',
      message: 'Login failed',
    });
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
