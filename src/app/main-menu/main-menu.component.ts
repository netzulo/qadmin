import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  title: string;

  constructor(private router: Router, private login: LoginService) {
    this.title = 'QAdmin';
  }

  ngOnInit() {
  }

}
