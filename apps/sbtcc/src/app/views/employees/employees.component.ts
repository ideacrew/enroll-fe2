import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';
import { Observable, Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sbtcc-employees',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
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
        <input matInput [formControl]="countField" />
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
export class EmployeesComponent implements OnInit, OnDestroy {
  dataState$: Observable<DataState>;
  employeeCount$: Observable<number | string>;

  countField = new FormControl('');
  private employeeCountSubscription!: Subscription;

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.employeeCount$ = this.dataState$.pipe(
      map((state) => state.employeeCount),
    );
    this.store.dispatch(DataAction.location({ location: 2 }));
  }

  ngOnInit(): void {
    this.employeeCountSubscription = this.employeeCount$.subscribe((value) => {
      this.countField.setValue(value.toString());
    });

    // TODO: Fix this
    // this.countField.valueChanges.subscribe((value) => console.log('changed'));
  }

  nextStep(): void {
    this.updateEmployeeCount(parseInt(this.countField.value || '0', 10));
    this.router.navigate(['/wages']);
  }

  previousStep(): void {
    this.router.navigate(['/tax-exemption']);
  }

  updateEmployeeCount(value: number | string): void {
    this.store.dispatch(
      DataAction.employeeCount({ employeeCount: value as unknown as number }),
    );
  }

  ngOnDestroy() {
    this.employeeCountSubscription.unsubscribe();
  }
}
