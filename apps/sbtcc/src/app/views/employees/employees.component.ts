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
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-employees',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslocoModule,
  ],
  template: `
    <ng-container *transloco="let t; read: 'employees'">
      <h2>2. {{ t('question') }}</h2>

      <p>{{ t('content') }}</p>

      <div class="form-area">
        <mat-label>{{ t('label') }}</mat-label>
        <mat-form-field appearance="outline" floatLabel="always">
          <input
            matInput
            type="number"
            inputmode="numeric"
            [formControl]="countField"
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
        [disabled]="countField.value === null || countField.value === ''"
        (click)="nextStep()"
      >
        {{ t('next') }}
      </button>
    </ng-container>
  `,
  styleUrls: ['employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  dataState$: Observable<DataState>;
  employeeCount$: Observable<number | null>;

  countField: FormControl;

  constructor(
    private router: Router,
    private util: UtilService,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');

    this.employeeCount$ = this.dataState$.pipe(
      map((state) => state.employeeCount),
    );

    this.countField = new FormControl();

    this.store.dispatch(DataAction.location({ location: 2 }));
  }

  ngOnInit(): void {
    this.store
      .pipe(select((state) => state.dataState.employeeCount))
      .subscribe((count) => {
        this.countField.setValue(count, { emitEvent: false });
      }).unsubscribe;

    this.countField.valueChanges.subscribe((value: number) => {
      this.store.dispatch(DataAction.employeeCount({ employeeCount: value }));
    }).unsubscribe;

    // Focus on the input field
    this.util.focusElement('input');
  }

  nextStep(): void {
    this.router.navigate(['/wages']);
  }

  previousStep(): void {
    this.router.navigate(['/tax-exemption']);
  }
}
