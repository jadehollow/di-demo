import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiIconGalleryComponent } from './di-icon-gallery.component';

describe('DiIconGalleryComponent', () => {
  let component: DiIconGalleryComponent;
  let fixture: ComponentFixture<DiIconGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiIconGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiIconGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
