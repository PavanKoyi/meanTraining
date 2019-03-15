import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatComp1Component } from './feat-comp1.component';

describe('FeatComp1Component', () => {
  let component: FeatComp1Component;
  let fixture: ComponentFixture<FeatComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
