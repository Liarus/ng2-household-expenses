import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialTypePageComponent } from './credential-type-page.component';

describe('CredentialTypePageComponent', () => {
  let component: CredentialTypePageComponent;
  let fixture: ComponentFixture<CredentialTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
