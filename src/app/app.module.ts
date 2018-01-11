import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { componentFactoryName } from '@angular/compiler';

import { LoginService } from './login.service';
import { AuthguardGuard } from './authguard.guard';
import { MainMenuComponent } from './main-menu/main-menu.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [ AuthguardGuard ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: environment.router_debug }
    )
  ],
  providers: [
    LoginService,
    AuthguardGuard
  ],
  bootstrap: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MainMenuComponent
  ]
})
export class AppModule { }
