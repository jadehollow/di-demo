import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntryComponent } from './login-entry.component';

describe('LoginComponent', () => {
  let component: LoginEntryComponent;
  let fixture: ComponentFixture<LoginEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
