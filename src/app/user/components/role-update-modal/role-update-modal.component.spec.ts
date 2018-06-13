import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUpdateModalComponent } from './role-update-modal.component';

describe('RoleUpdateModalComponent', () => {
  let component: RoleUpdateModalComponent;
  let fixture: ComponentFixture<RoleUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
