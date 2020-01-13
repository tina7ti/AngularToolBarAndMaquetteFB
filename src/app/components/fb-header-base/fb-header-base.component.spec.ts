import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbHeaderBaseComponent } from './fb-header-base.component';

describe('FbHeaderBaseComponent', () => {
  let component: FbHeaderBaseComponent;
  let fixture: ComponentFixture<FbHeaderBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbHeaderBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbHeaderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
