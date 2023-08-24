import { createAction, props } from '@ngrx/store';
import { DataEntity } from './data.models';

export const initData = createAction('[Data] Init');

export const loadDataSuccess = createAction(
  '[Data/API] Load Data Success',
  props<{ data: DataEntity[] }>(),
);

export const loadDataFailure = createAction(
  '[Data/API] Load Data Failure',
  props<{ error: Error }>(),
);

export const reset = createAction('[Data] Reset Data');

export const location = createAction(
  '[Data] Update Location',
  props<{ location: number | string }>(),
);

export const taxExempt = createAction(
  '[Data] Tax Exempt',
  props<{ taxExempt: boolean }>(),
);

export const employeeCount = createAction(
  '[Data] Employee Count',
  props<{ employeeCount: number }>(),
);

export const wages = createAction('[Data] Wages', props<{ wages: number }>());

export const premiums = createAction(
  '[Data] Premiums',
  props<{ premiums: number }>(),
);
