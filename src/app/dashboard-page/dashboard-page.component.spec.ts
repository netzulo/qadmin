import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from '../app.module';
import { LoginPageComponent } from '../login-page/login-page.component';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';
import { LoginService } from '../login.service';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardPageComponent,
        LoginPageComponent,
        NgbAlert
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes)
      ],
      providers: [
        LoginService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
