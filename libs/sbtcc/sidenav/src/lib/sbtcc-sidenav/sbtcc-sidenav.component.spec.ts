import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SbtccSidenavComponent } from './sbtcc-sidenav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SbtccSidenavComponent', () => {
  let component: SbtccSidenavComponent;
  let fixture: ComponentFixture<SbtccSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbtccSidenavComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SbtccSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
