import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTypeListComponent } from './saving-type-list.component';

describe('SavingTypeListComponent', () => {
  let component: SavingTypeListComponent;
  let fixture: ComponentFixture<SavingTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
