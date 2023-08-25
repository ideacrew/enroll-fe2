import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';
import { SbtccFooterComponent } from '@enroll/sbtcc/footer';
import { SbtccSidenavComponent } from '@enroll/sbtcc/sidenav';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';
import { CommonModule } from '@angular/common';
import * as DataAction from '../../+state/data.actions';

@Component({
  selector: 'sbtcc-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SbtccHeaderComponent,
    SbtccFooterComponent,
    SbtccSidenavComponent,
  ],
  styleUrls: ['./main-layout.component.scss'],
  template: `
    <div class="wrapper">
      <sbtcc-header />

      <div class="content">
        <div class="inner-content">
          <sbtcc-sidenav
            [currentLocation]="currentLocation | async"
            (resetDataEvent)="resetData()"
          />

          <main>
            <h1>Small Business Tax Credit Calculator</h1>
            <router-outlet />
          </main>
        </div>
      </div>

      <sbtcc-footer />
    </div>
  `,
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  title = 'sbtcc App';

  dataState$: Observable<DataState>;
  currentLocation = new Observable<number>();

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = this.store.select('dataState');
  }

  ngOnInit(): void {
    this.currentLocation = this.dataState$.pipe(map((state) => state.location));
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  resetData(): void {
    this.store.dispatch(DataAction.reset());
  }
}
