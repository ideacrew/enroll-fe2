import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';
import { SbtccFooterComponent } from '@enroll/sbtcc/footer';
import { SbtccSidenavComponent } from '@enroll/sbtcc/sidenav';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';
import { CommonModule } from '@angular/common';

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
          <sbtcc-sidenav [currentLocation]="(testing | async) || 0" />

          <main>
            <h1>Small Business Tax Credit Calculator {{ testing | async }}</h1>
            <router-outlet />
          </main>
        </div>
      </div>

      <sbtcc-footer />
    </div>
  `,
})
export class MainLayoutComponent {
  title = 'sbtcc App';

  dataState$: Observable<DataState>;
  testing: Observable<number | string>;

  constructor(private store: Store<{ dataState: DataState }>) {
    this.dataState$ = this.store.select('dataState');
    this.testing = this.dataState$.pipe(map((state) => state.location));
  }
}
