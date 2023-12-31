import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxExemptionComponent } from './tax-exemption.component';
import { provideMockStore } from '@ngrx/store/testing';
import { getTranslocoModule } from '../../translocoTesting.module';

describe('TaxExemptionComponent', () => {
  let component: TaxExemptionComponent;
  let fixture: ComponentFixture<TaxExemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxExemptionComponent, getTranslocoModule()],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
