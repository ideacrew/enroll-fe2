import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltLayoutComponent } from './alt-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '../../translocoTesting.module';

describe('AltLayoutComponent', () => {
  let component: AltLayoutComponent;
  let fixture: ComponentFixture<AltLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltLayoutComponent, RouterTestingModule, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(AltLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
