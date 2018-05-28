import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialTypeListComponent } from './credential-type-list.component';

describe('CredentialTypeListComponent', () => {
  let component: CredentialTypeListComponent;
  let fixture: ComponentFixture<CredentialTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
