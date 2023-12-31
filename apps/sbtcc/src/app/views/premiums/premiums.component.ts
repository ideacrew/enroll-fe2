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
  selector: 'sbtcc-premiums',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslocoDirective,
    InputMaskModule,
  ],
  template: `
    <ng-container *transloco="let t; read: 'premiums'">
      <h2>4. {{ t('question') }}</h2>

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
            [formControl]="premiumsField"
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
          premiumsField.value === null ||
          premiumsField.value === '' ||
          premiumsField.value <= 0
        "
        (click)="nextStep()"
      >
        {{ t('next') }}
      </button>
    </ng-container>
  `,
  styleUrls: ['./premiums.component.scss'],
})
export class PremiumsComponent implements OnInit {
  dataState$: Observable<DataState>;
  premiums$: Observable<number | null>;

  premiumsField: FormControl;

  constructor(
    private router: Router,
    public util: UtilService,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');

    this.premiums$ = this.dataState$.pipe(map((state) => state.premiums));

    this.premiumsField = new FormControl('');

    this.store.dispatch(DataAction.location({ location: 4 }));
  }

  ngOnInit(): void {
    this.store
      .pipe(select((state) => state.dataState.premiums))
      .subscribe((count) => {
        this.premiumsField.setValue(count, { emitEvent: false });
      }).unsubscribe;

    this.premiumsField.valueChanges.subscribe((value: string) => {
      const formattedVal = this.util.formatCommaNumber(value);
      this.store.dispatch(DataAction.premiums({ premiums: formattedVal }));
    }).unsubscribe;

    this.util.focusElement('input');
  }

  nextStep() {
    this.router.navigate(['/results']);
  }

  previousStep() {
    this.router.navigate(['/wages']);
  }
}
