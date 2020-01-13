import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarExo1Component } from './toolbar-exo1.component';

describe('ToolbarExo1Component', () => {
  let component: ToolbarExo1Component;
  let fixture: ComponentFixture<ToolbarExo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarExo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarExo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
