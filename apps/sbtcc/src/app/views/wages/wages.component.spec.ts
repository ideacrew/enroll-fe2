import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WagesComponent } from './wages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

describe('WagesComponent', () => {
  let component: WagesComponent;
  let fixture: ComponentFixture<WagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WagesComponent, BrowserAnimationsModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(WagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
