import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiIconComponent } from './di-icon.component';

describe('DiIconComponent', () => {
  let component: DiIconComponent;
  let fixture: ComponentFixture<DiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
