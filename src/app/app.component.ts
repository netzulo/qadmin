import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NGXLogger]
})
export class AppComponent {
  title = 'QAdmin';

  constructor(private logger: NGXLogger) {
    this.logger.debug('AppComponent: constructor OK');
  }

  onClick(event) {
    const node_target = event.currentTarget;
    this.logger.debug('AppComponent: onClick received');
    node_target.textContent = 'Wait for login page please...';
    node_target.setAttribute(
      'class', node_target.getAttribute('class') + ' disabled');
    window.location.href = '/login';
  }
}
