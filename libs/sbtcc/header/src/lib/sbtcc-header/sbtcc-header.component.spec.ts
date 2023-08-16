import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SbtccHeaderComponent } from './sbtcc-header.component';

describe('SbtccHeaderComponent', () => {
  let component: SbtccHeaderComponent;
  let fixture: ComponentFixture<SbtccHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbtccHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SbtccHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
