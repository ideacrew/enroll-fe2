import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DATA_FEATURE_KEY, DataState, dataAdapter } from './data.reducer';

// Lookup the 'Data' feature state managed by NgRx
export const selectDataState =
  createFeatureSelector<DataState>(DATA_FEATURE_KEY);

const { selectAll, selectEntities } = dataAdapter.getSelectors();

export const selectDataLoaded = createSelector(
  selectDataState,
  (state: DataState) => state.loaded,
);

export const selectDataError = createSelector(
  selectDataState,
  (state: DataState) => state.error,
);

export const selectAllData = createSelector(
  selectDataState,
  (state: DataState) => selectAll(state),
);

export const selectDataEntities = createSelector(
  selectDataState,
  (state: DataState) => selectEntities(state),
);

export const selectSelectedId = createSelector(
  selectDataState,
  (state: DataState) => state.selectedId,
);

export const selectEntity = createSelector(
  selectDataEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
