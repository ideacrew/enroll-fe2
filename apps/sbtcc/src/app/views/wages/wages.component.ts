import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';
import { Observable, Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'sbtcc-wages',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
  template: `
    <h2>
      3. What are your total estimated employee wages for the applicable tax
      year?
    </h2>

    <p>
      The total wages you paid or expect to pay for both full-time and part-time
      employees should include all wages subject to Social Security and Medicare
      tax withholding (even if an employee's yearly wages are more than the wage
      base limit).
    </p>

    <div class="form-area">
      <mat-label>Total wages in $USD</mat-label>
      <mat-form-field appearance="outline" floatLabel="always">
        <input matInput [formControl]="wagesField" (keyup.enter)="nextStep()" />
      </mat-form-field>
    </div>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Previous Step
    </button>
    <button
      mat-raised-button
      color="primary"
      [disabled]="wagesField.value === null || wagesField.value === ''"
      (click)="nextStep()"
    >
      Continue to Next Step
    </button>
  `,
  styleUrls: ['./wages.component.scss'],
})
export class WagesComponent implements OnInit, OnDestroy {
  dataState$: Observable<DataState>;
  wages$: Observable<number | null>;

  wagesField = new FormControl('');
  private wagesSubscription!: Subscription;

  constructor(
    private router: Router,
    private util: UtilService,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.wages$ = this.dataState$.pipe(map((state) => state.wages));
  }

  ngOnInit(): void {
    this.wagesSubscription = this.wages$.subscribe((value) => {
      if (value !== null) {
        this.wagesField.setValue(value.toString());
      }
    });

    this.store.dispatch(DataAction.location({ location: 3 }));

    // TODO: Fix this
    // this.countField.valueChanges.subscribe((value) => console.log('changed'));

    this.util.focusElement('input');
  }

  ngOnDestroy() {
    this.wagesSubscription.unsubscribe();
  }

  nextStep() {
    this.updateWages(parseInt(this.wagesField.value || '0', 10));
    this.router.navigate(['/premiums']);
  }

  previousStep() {
    this.router.navigate(['/employees']);
  }

  updateWages(value: number | string): void {
    this.store.dispatch(
      DataAction.wages({ wages: value as unknown as number }),
    );
  }
}
