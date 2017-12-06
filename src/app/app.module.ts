import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    RouterModule.forRoot(routes, {
        enableTracing: environment.production
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
