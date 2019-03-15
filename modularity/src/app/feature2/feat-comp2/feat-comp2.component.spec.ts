import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatComp2Component } from './feat-comp2.component';

describe('FeatComp2Component', () => {
  let component: FeatComp2Component;
  let fixture: ComponentFixture<FeatComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
