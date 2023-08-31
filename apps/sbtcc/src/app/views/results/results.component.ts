import { Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-results',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    TranslocoDirective,
  ],
  template: `
    <ng-container *transloco="let t; read: 'results'">
      <h2>{{ t('header') }}</h2>

      <ol>
        <li>
          <strong>{{ t('result1.question') }}</strong>
          <span *ngIf="(this.taxExempt$ | async) === true; else nope">
            {{ t('result1.yes') }}
          </span>
          <ng-template #nope>
            <span> {{ t('result1.no') }}</span>
          </ng-template>
        </li>

        <li>
          <strong>{{ t('result2') }}</strong>
          <span>{{ this.employeeCount$ | async }}</span>
        </li>

        <li>
          <strong>
            {{ t('result3') }}
          </strong>
          <span>$ {{ this.wages$ | async }}</span>
        </li>

        <li>
          <strong>
            {{ t('result4') }}
          </strong>
          <span>$ {{ this.premiums$ | async }}</span>
        </li>
      </ol>

      <h3>{{ t('total') }}: $ {{ this.results$ | async }}</h3>

      <button mat-raised-button color="basic" (click)="previousStep()">
        {{ t('previous') }}
      </button>
      <button mat-raised-button color="primary" (click)="nextStep()">
        {{ t('next') }}
      </button>
    </ng-container>
  `,
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  dataState$: Observable<DataState>;

  taxExempt$: Observable<boolean | null>;
  employeeCount$: Observable<number | null>;
  wages$: Observable<number | null>;
  premiums$: Observable<number | null>;
  results$: Observable<number>;

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');

    this.taxExempt$ = this.dataState$.pipe(map((state) => state.taxExempt));
    this.employeeCount$ = this.dataState$.pipe(
      map((state) => state.employeeCount),
    );
    this.wages$ = this.dataState$.pipe(map((state) => state.wages));
    this.premiums$ = this.dataState$.pipe(map((state) => state.premiums));
    this.results$ = this.dataState$.pipe(map((state) => state.results));

    this.store.dispatch(DataAction.location({ location: 5 }));

    this.calculateResults();
  }

  previousStep() {
    this.router.navigate(['/premiums']);
  }

  nextStep() {
    this.store.dispatch(DataAction.reset());
    this.router.navigate(['/tax-exemption']);
  }

  calculateResults() {
    this.store.dispatch(DataAction.results());
  }
}
