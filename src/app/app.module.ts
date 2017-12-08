import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      {
        enableTracing: environment.production
      }
    ),
    LoggerModule.forRoot(
      {
        serverLoggingUrl: '/api/logs',
        level: NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.OFF
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
