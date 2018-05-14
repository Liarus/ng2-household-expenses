import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdCreateModalComponent } from './household-create-modal.component';

describe('HouseholdModalComponent', () => {
  let component: HouseholdCreateModalComponent;
  let fixture: ComponentFixture<HouseholdCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
