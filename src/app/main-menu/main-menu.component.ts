import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "QAdmin";
  }

  ngOnInit() {
    console.debug("[component] MainMenuComponent loaded");
  }

}
