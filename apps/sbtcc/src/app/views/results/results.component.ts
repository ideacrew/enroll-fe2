import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';

@Component({
  selector: 'sbtcc-results',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <h2>Results from Responses</h2>

    <ol>
      <li>
        <strong>Are you a tax-exempt employer?</strong>
        <span *ngIf="(this.taxExempt$ | async) === true; else nope">
          Yes, I'm a tax-exempt employer
        </span>
        <ng-template #nope>
          <span> No, I'm not a tax-exempt employer</span>
        </ng-template>
      </li>

      <li>
        <strong>How many employees work more than 40 hours a week</strong>
        <span>{{ this.employeeCount$ | async }}</span>
      </li>

      <li>
        <strong>
          Total estimated employee wages for the applicable tax year?
        </strong>
        <span>$ {{ this.wages$ | async }}</span>
      </li>

      <li>
        <strong>
          Total estimated amount paid toward premiums during the applicable
          year?
        </strong>
        <span>$ {{ this.premiums$ | async }}</span>
      </li>
    </ol>

    <h3>Estimated annual tax-credit: $ {{ this.results$ | async }}</h3>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Previous Step
    </button>
    <button mat-raised-button color="primary" (click)="nextStep()">
      Start Over
    </button>
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
