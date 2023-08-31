import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-tax-exemption',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRadioModule, TranslocoDirective],

  styleUrls: ['tax-exemption.component.scss'],
  template: `
    <ng-container *transloco="let t; read: 'tax-exempt'">
      <h2>1. {{ t('question') }}</h2>

      <p>{{ t('content') }}</p>

      <mat-radio-group
        class="questions"
        name="tax-exempt-question"
        [value]="taxExempt$ | async"
        (keyup.enter)="nextStep()"
        (change)="taxExemptChanged($event)"
      >
        <mat-radio-button class="radio" [value]="true">
          {{ t('yes') }}
        </mat-radio-button>
        <mat-radio-button class="radio" [value]="false">
          {{ t('no') }}
        </mat-radio-button>
      </mat-radio-group>

      <button
        mat-raised-button
        color="primary"
        [disabled]="buttonDisabled"
        (click)="nextStep()"
      >
        {{ t('next') }}
      </button>
    </ng-container>
  `,
})
export class TaxExemptionComponent {
  dataState$: Observable<DataState>;
  taxExempt$: Observable<boolean | null>;

  buttonDisabled = true;

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.taxExempt$ = this.dataState$.pipe(map((state) => state.taxExempt));

    // Enable the button when the taxExempt$ observable emits a value other than null
    this.taxExempt$.subscribe((data) => (this.buttonDisabled = data === null))
      .unsubscribe;

    this.store.dispatch(DataAction.location({ location: 1 }));
  }

  nextStep(): void {
    this.router.navigate(['/employees']);
  }

  taxExemptChanged(event: MatRadioChange): void {
    this.store.dispatch(DataAction.taxExempt({ taxExempt: event.value }));
  }
}
