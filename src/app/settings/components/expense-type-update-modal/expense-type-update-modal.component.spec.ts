import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTypeUpdateModalComponent } from './expense-type-update-modal.component';

describe('ExpenseTypeUpdateModalComponent', () => {
  let component: ExpenseTypeUpdateModalComponent;
  let fixture: ComponentFixture<ExpenseTypeUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTypeUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTypeUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
