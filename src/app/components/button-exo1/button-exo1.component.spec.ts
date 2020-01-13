import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExo1Component } from './button-exo1.component';

describe('ButtonExo1Component', () => {
  let component: ButtonExo1Component;
  let fixture: ComponentFixture<ButtonExo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
