import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';

@Component({
  selector: 'sbtcc-start',
  standalone: true,
  imports: [MatButtonModule],
  template: `
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
export class StartComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(DataAction.location({ location: 0 }));
  }

  nextStep(): void {
    this.router.navigate(['/tax-exemption']);
  }
}
