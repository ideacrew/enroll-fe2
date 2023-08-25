import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';

@Component({
  selector: 'sbtcc-tax-exemption',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRadioModule],

  styleUrls: ['tax-exemption.component.scss'],
  template: `
    <h2>1. Are you a tax-exempt employer?</h2>

    <p>
      The credit is refundable for tax-exempt employers, but is limited to the
      amount of the tax-exempt employer's payroll taxes withheld during the
      calendar year.
    </p>

    <mat-radio-group
      class="questions"
      name="tax-exempt-question"
      [value]="taxExempt$ | async"
      (keyup.enter)="nextStep()"
      (change)="taxExemptChanged($event)"
    >
      <mat-radio-button class="radio" value="true">
        Yes, I'm a tax-exempt employer
      </mat-radio-button>
      <mat-radio-button class="radio" value="false">
        No, I'm not a tax-exempt employer
      </mat-radio-button>
    </mat-radio-group>

    <button
      mat-raised-button
      color="primary"
      [disabled]="buttonDisabled"
      (click)="nextStep()"
    >
      Continue to Next Step
    </button>
  `,
})
export class TaxExemptionComponent implements OnInit {
  dataState$: Observable<DataState>;
  taxExempt$: Observable<boolean | null>;

  buttonDisabled = true;

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.taxExempt$ = this.dataState$.pipe(map((state) => state.taxExempt));
    // this.store.dispatch(DataAction.reset());

    // Enable the button when the taxExempt$ observable emits a value other than null
    this.taxExempt$.subscribe((data) => (this.buttonDisabled = data === null))
      .unsubscribe;
  }

  ngOnInit(): void {
    this.store.dispatch(DataAction.location({ location: 1 }));
  }

  nextStep(): void {
    this.router.navigate(['/employees']);
  }

  taxExemptChanged(event: MatRadioChange): void {
    this.store.dispatch(DataAction.taxExempt({ taxExempt: event.value }));
  }
}
