import { Action } from '@ngrx/store';

import * as DataActions from './data.actions';
import { DataEntity } from './data.models';
import { DataState, initialDataState, dataReducer } from './data.reducer';

describe('Data Reducer', () => {
  const createDataEntity = (id: string): DataEntity => ({
    id,
    location: 0,
    exempt: true,
    employeeCount: 0,
    totalWages: 0,
    premiumContributions: 0,
    result: 0,
  });

  describe('valid Data actions', () => {
    it('loadDataSuccess should return the list of known Data', () => {
      const data = [
        createDataEntity('PRODUCT-AAA'),
        createDataEntity('PRODUCT-zzz'),
      ];
      const action = DataActions.loadDataSuccess({ data });

      const result: DataState = dataReducer(initialDataState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = dataReducer(initialDataState, action);

      expect(result).toBe(initialDataState);
    });
  });
});
