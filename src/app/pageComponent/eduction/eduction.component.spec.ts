/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EductionComponent } from './eduction.component';

describe('EductionComponent', () => {
  let component: EductionComponent;
  let fixture: ComponentFixture<EductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
