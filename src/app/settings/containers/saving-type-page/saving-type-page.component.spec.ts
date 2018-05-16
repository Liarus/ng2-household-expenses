import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTypePageComponent } from './saving-type-page.component';

describe('SavingTypePageComponent', () => {
  let component: SavingTypePageComponent;
  let fixture: ComponentFixture<SavingTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
