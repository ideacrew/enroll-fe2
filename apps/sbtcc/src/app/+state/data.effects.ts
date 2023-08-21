import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as DataActions from './data.actions';
// import * as DataFeature from './data.reducer';

@Injectable()
export class DataEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.initData),
      switchMap(() => of(DataActions.loadDataSuccess({ data: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(DataActions.loadDataFailure({ error }));
      }),
    ),
  );
}
