import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SbtccFooterComponent } from './sbtcc-footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SbtccFooterComponent', () => {
  let component: SbtccFooterComponent;
  let fixture: ComponentFixture<SbtccFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbtccFooterComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SbtccFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
