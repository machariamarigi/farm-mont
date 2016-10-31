/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchlessSplashComponent } from './searchless-splash.component';

describe('SearchlessSplashComponent', () => {
  let component: SearchlessSplashComponent;
  let fixture: ComponentFixture<SearchlessSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlessSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlessSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
