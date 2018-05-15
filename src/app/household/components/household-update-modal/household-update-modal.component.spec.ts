import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdUpdateModalComponent } from './household-update-modal.component';

describe('HouseholdUpdateModalComponent', () => {
  let component: HouseholdUpdateModalComponent;
  let fixture: ComponentFixture<HouseholdUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
