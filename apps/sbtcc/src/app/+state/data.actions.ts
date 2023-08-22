import { createAction, props } from '@ngrx/store';
import { DataEntity } from './data.models';

export const initData = createAction('[Data Page] Init');

export const loadDataSuccess = createAction(
  '[Data/API] Load Data Success',
  props<{ data: DataEntity[] }>(),
);

export const loadDataFailure = createAction(
  '[Data/API] Load Data Failure',
  props<{ error: any }>(),
);

export const location = createAction(
  '[Data Page] Update Location',
  props<{ location: number | string }>(),
);

export const taxExempt = createAction(
  '[Data Page] Tax Exempt',
  props<{ taxExempt: boolean }>(),
);

export const employeeCount = createAction(
  '[Data Page] Employee Count',
  props<{ employeeCount: number }>(),
);

export const wages = createAction(
  '[Data Page] Wages',
  props<{ wages: number }>(),
);

export const premiums = createAction(
  '[Data Page] Premiums',
  props<{ premiums: number }>(),
);
