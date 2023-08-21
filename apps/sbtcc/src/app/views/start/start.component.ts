import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataState } from '../../+state/data.reducer';

@Component({
  selector: 'sbtcc-start',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <h1>{{ testing | async }}</h1>
    <p>
      Use our calculator to find out if your business might qualify for a tax
      credit, and if so, what amount of financial help you may expect. Keep in
      mind that results from the calculator are simply an estimate. Please
      consult your tax adviser for further assistance.
    </p>

    <button (click)="nextStep()" mat-raised-button color="primary">
      Begin the Calculator
    </button>
  `,
  styleUrls: ['start.component.scss'],
})
export class StartComponent {
  dataState$: Observable<DataState>;
  testing: Observable<number>;

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.testing = this.dataState$.pipe(map((state) => state.employeeCount));
  }

  nextStep(): void {
    this.router.navigate(['/tax-exemption']);
  }
}
