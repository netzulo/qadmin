import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public description_url: string;
  public description_txt: string;

  constructor() {
    this.description_url = "https://dummyimage.com/900x600/000/00ffd5.png";
    this.description_txt = "Collaborate with us on https://github.com/netzulo/qalab";
  }
}
