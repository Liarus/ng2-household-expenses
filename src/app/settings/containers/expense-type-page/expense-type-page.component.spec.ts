import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTypePageComponent } from './expense-type-page.component';

describe('ExpenseTypePageComponent', () => {
  let component: ExpenseTypePageComponent;
  let fixture: ComponentFixture<ExpenseTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
