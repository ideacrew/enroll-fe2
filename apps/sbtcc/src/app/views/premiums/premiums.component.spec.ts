import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumsComponent } from './premiums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PremiumsComponent', () => {
  let component: PremiumsComponent;
  let fixture: ComponentFixture<PremiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumsComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
