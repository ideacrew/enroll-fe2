import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UtilService } from '../../services/util.service';
import { TranslocoDirective } from '@ngneat/transloco';
import { InputMaskModule } from '@ngneat/input-mask';

@Component({
  selector: 'sbtcc-wages',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslocoDirective,
    InputMaskModule,
  ],
  template: `
    <ng-container *transloco="let t; read: 'wages'">
      <h2>3. {{ t('question') }}</h2>

      <p>{{ t('content') }}</p>

      <div class="form-area">
        <mat-label>{{ t('label') }}</mat-label>
        <mat-form-field appearance="outline" floatLabel="always">
          <span matPrefix>$</span>
          <input
            matInput
            min="0"
            oninput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"
            [inputMask]="util.currencyInputMask"
            [formControl]="wagesField"
            (keyup.enter)="nextStep()"
          />
        </mat-form-field>
      </div>

      <button mat-raised-button color="basic" (click)="previousStep()">
        {{ t('previous') }}
      </button>
      <button
        mat-raised-button
        color="primary"
        [disabled]="
          wagesField.value === null ||
          wagesField.value === '' ||
          wagesField.value <= 0
        "
        (click)="nextStep()"
      >
        {{ t('next') }}
      </button>
    </ng-container>
  `,
  styleUrls: ['./wages.component.scss'],
})
export class WagesComponent implements OnInit {
  dataState$: Observable<DataState>;
  wages$: Observable<number | null>;

  wagesField: FormControl;

  constructor(
    private router: Router,
    public util: UtilService,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');

    this.wages$ = this.dataState$.pipe(map((state) => state.wages));

    this.wagesField = new FormControl('');

    this.store.dispatch(DataAction.location({ location: 3 }));
  }

  ngOnInit(): void {
    this.store
      .pipe(select((state) => state.dataState.wages))
      .subscribe((count) => {
        this.wagesField.setValue(count, { emitEvent: false });
      }).unsubscribe;

    this.wagesField.valueChanges.subscribe((value: string) => {
      const formattedVal = this.util.formatCommaNumber(value);
      this.store.dispatch(DataAction.wages({ wages: formattedVal }));
    }).unsubscribe;

    this.util.focusElement('input');
  }

  nextStep() {
    this.router.navigate(['/premiums']);
  }

  previousStep() {
    this.router.navigate(['/employees']);
  }
}
