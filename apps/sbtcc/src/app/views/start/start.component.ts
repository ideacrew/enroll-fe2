import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { DataState } from '../../+state/data.reducer';
import * as DataAction from '../../+state/data.actions';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-start',
  standalone: true,
  imports: [MatButtonModule, TranslocoModule],
  template: `
    <ng-container *transloco="let t; read: 'start'">
      <p>{{ t('content') }}</p>

      <button (click)="nextStep()" mat-raised-button color="primary">
        {{ t('next') }}
      </button>
    </ng-container>
  `,
  styleUrls: ['start.component.scss'],
})
export class StartComponent {
  constructor(
    private router: Router,
    private store: Store<{ dataState: DataState }>,
  ) {
    this.store.dispatch(DataAction.location({ location: 0 }));
  }

  nextStep(): void {
    this.router.navigate(['/tax-exemption']);
  }
}
