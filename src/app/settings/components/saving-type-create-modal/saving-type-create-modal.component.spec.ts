import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTypeCreateModalComponent } from './saving-type-create-modal.component';

describe('SavingTypeCreateModalComponent', () => {
  let component: SavingTypeCreateModalComponent;
  let fixture: ComponentFixture<SavingTypeCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingTypeCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTypeCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
