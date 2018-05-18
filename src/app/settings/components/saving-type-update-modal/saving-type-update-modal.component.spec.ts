import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTypeUpdateModalComponent } from './saving-type-update-modal.component';

describe('SavingTypeUpdateModalComponent', () => {
  let component: SavingTypeUpdateModalComponent;
  let fixture: ComponentFixture<SavingTypeUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingTypeUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTypeUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
