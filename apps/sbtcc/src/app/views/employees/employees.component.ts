import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DataState } from '../../+state/data.reducer';
import {
  loadDataSuccess,
  loadDataFailure,
  taxExempt,
} from '../../+state/data.actions';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sbtcc-employees',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <h2>2. How many of your employees work 40 hours or more a week?</h2>

    <p>
      Full-time employees are employees who worked or who you expect to work the
      equivalent of 40 hours a week for 52 weeks (for a total of 2,080 hours
      each).
    </p>

    <form class="form-area">
      <mat-label>Number of full-time employees</mat-label>
      <mat-form-field appearance="outline" floatLabel="always">
        <input matInput [formControl]="count" />
      </mat-form-field>
    </form>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Previous Step
    </button>
    <button mat-raised-button color="primary" (click)="nextStep()">
      Continue to Next Step
    </button>
  `,
  styleUrls: ['employees.component.scss'],
})
export class EmployeesComponent {
  dataState$: Observable<DataState>;
  employeeCount$: Observable<number | string>;

  count = new FormControl('');

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.employeeCount$ = this.dataState$.pipe(
      map((state) => state.employeeCount),
    );

    this.employeeCount$.subscribe((value) => {
      this.count.setValue(value.toString());
    });
  }

  nextStep(): void {
    this.router.navigate(['/wages']);
  }

  previousStep(): void {
    this.router.navigate(['/tax-exemption']);
  }
}
