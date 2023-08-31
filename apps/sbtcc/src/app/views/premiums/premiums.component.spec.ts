import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumsComponent } from './premiums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { getTranslocoModule } from '../../translocoTesting.module';

describe('PremiumsComponent', () => {
  let component: PremiumsComponent;
  let fixture: ComponentFixture<PremiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PremiumsComponent,
        BrowserAnimationsModule,
        getTranslocoModule(),
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
