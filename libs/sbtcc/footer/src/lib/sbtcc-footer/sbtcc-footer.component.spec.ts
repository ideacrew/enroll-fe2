import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SbtccFooterComponent } from './sbtcc-footer.component';

describe('SbtccFooterComponent', () => {
  let component: SbtccFooterComponent;
  let fixture: ComponentFixture<SbtccFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbtccFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SbtccFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
