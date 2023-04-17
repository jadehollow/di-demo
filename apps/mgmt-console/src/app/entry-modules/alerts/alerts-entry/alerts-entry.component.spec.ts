import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsEntryComponent } from './alerts-entry.component';

describe('EntryComponentComponent', () => {
  let component: AlertsEntryComponent;
  let fixture: ComponentFixture<AlertsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertsEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
