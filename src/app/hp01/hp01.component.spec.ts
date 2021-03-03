import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HP01Component } from './hp01.component';

describe('HP01Component', () => {
  let component: HP01Component;
  let fixture: ComponentFixture<HP01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HP01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HP01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
