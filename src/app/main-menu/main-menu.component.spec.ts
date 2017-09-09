/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'QAdmin'`, async(() => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('QAdmin');
  }));

  it('should render title in a element with id=main-menu-title', async(() => {
    const fixture = TestBed.createComponent(MainMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#main-menu-title').textContent).toContain('QAdmin');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
