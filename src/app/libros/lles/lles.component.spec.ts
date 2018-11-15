import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlesComponent } from './lles.component';

describe('LlesComponent', () => {
  let component: LlesComponent;
  let fixture: ComponentFixture<LlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
