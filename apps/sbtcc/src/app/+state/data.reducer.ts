import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DataActions from './data.actions';
import { DataEntity } from './data.models';

export const DATA_FEATURE_KEY = 'data';

export interface DataState extends EntityState<DataEntity> {
  selectedId?: string | number; // which Data record has been selected
  location: string | number;
  taxExempt: boolean | string;
  employeeCount: number;
  wages: number;
  premiums: number;
  results: number;
  loaded: boolean; // has the Data list been loaded
  error?: string | null; // last known error (if any)
}

export interface DataPartialState {
  readonly [DATA_FEATURE_KEY]: DataState;
}

export const dataAdapter: EntityAdapter<DataEntity> =
  createEntityAdapter<DataEntity>();

export const initialDataState: DataState = dataAdapter.getInitialState({
  // set initial required properties
  location: 0,
  taxExempt: false,
  employeeCount: 0,
  wages: 0,
  premiums: 0,
  results: 0,
  loaded: false,
});

const reducer = createReducer(
  initialDataState,
  on(DataActions.initData, (state) => ({
    ...state,
    location: 0,
    loaded: false,
    error: null,
  })),
  on(DataActions.loadDataSuccess, (state, { data }) =>
    dataAdapter.setAll(data, { ...state, loaded: true }),
  ),
  on(DataActions.loadDataFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(DataActions.reset, () => ({
    ...initialDataState,
  })),
  on(DataActions.location, (state, { location }) => ({
    ...state,
    location,
  })),
  on(DataActions.taxExempt, (state, { taxExempt }) => ({
    ...state,
    taxExempt,
  })),
  on(DataActions.employeeCount, (state, { employeeCount }) => ({
    ...state,
    location: 1,
    employeeCount,
  })),
  on(DataActions.wages, (state, { wages }) => ({
    ...state,
    location: 2,
    wages,
  })),
  on(DataActions.premiums, (state, { premiums }) => ({
    ...state,
    location: 3,
    premiums,
  })),
);

export function dataReducer(state: DataState | undefined, action: Action) {
  return reducer(state, action);
}
