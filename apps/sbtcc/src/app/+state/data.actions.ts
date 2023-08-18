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
