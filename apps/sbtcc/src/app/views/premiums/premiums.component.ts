import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
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
  selector: 'sbtcc-premiums',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
  template: `
    <h2>
      4. What is the total estimated amount you will pay toward premiums during
      the applicable year?
    </h2>

    <p>
      The total wages you paid or expect to pay for both full-time and part-time
      employees should include all wages subject to Social Security and Medicare
      tax withholding (even if an employee's yearly wages are more than the wage
      base limit).
    </p>

    <form class="form-area">
      <mat-label>Total contribution in $USD</mat-label>
      <mat-form-field appearance="outline" floatLabel="always">
        <input matInput [formControl]="premiumsField" />
      </mat-form-field>
    </form>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Previous Step
    </button>
    <button
      mat-raised-button
      color="primary"
      [disabled]="premiumsField.value === null || premiumsField.value === ''"
      (click)="nextStep()"
    >
      Continue to Next Step
    </button>
  `,
  styleUrls: ['./premiums.component.scss'],
})
export class PremiumsComponent implements OnInit, OnChanges, OnDestroy {
  dataState$: Observable<DataState>;
  premiums$: Observable<number | null>;

  premiumsField = new FormControl('');
  private premiumSubscription!: Subscription;

  constructor(
    private router: Router,
    private util: UtilService,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.premiums$ = this.dataState$.pipe(map((state) => state.premiums));
  }

  ngOnInit(): void {
    this.premiumSubscription = this.premiums$.subscribe((value) => {
      if (value !== null) {
        this.premiumsField.setValue(value.toString());
      }
    });

    // TODO: Fix this
    // this.countField.valueChanges.subscribe((value) => console.log('changed'));

    this.util.focusElement('input');
  }

  ngOnChanges(): void {
    this.store.dispatch(DataAction.location({ location: 4 }));
  }

  ngOnDestroy() {
    this.premiumSubscription.unsubscribe();
  }

  nextStep() {
    this.updatePremiums(parseInt(this.premiumsField.value || '0', 10));
    this.router.navigate(['/results']);
  }

  previousStep() {
    this.router.navigate(['/wages']);
  }

  updatePremiums(value: number | string): void {
    this.store.dispatch(
      DataAction.premiums({ premiums: value as unknown as number }),
    );
  }
}
