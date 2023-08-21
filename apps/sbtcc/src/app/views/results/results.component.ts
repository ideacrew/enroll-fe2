import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DataState } from '../../+state/data.reducer';

@Component({
  selector: 'sbtcc-results',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <h2>Results</h2>

    <h3>Estimated annual tax-credit: {{ this.results$ | async }}</h3>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Return Home
    </button>
    <button mat-raised-button color="primary" (click)="nextStep()">
      Start Over
    </button>
  `,
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  dataState$: Observable<DataState>;
  results$: Observable<number>;

  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.dataState$ = store.select('dataState');
    this.results$ = this.dataState$.pipe(map((state) => state.results));
  }

  previousStep() {
    this.router.navigate(['/']);
  }

  nextStep() {
    this.router.navigate(['/']);
  }
}
