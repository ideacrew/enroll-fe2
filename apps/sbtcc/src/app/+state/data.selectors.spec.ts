import { DataEntity } from './data.models';
import {
  dataAdapter,
  DataPartialState,
  initialDataState,
} from './data.reducer';
import * as DataSelectors from './data.selectors';

describe('Data Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDataId = (it: DataEntity) => it.id;
  const createDataEntity = (id: string | number) =>
    ({
      id,
      exempt: false,
      employeeCount: 8,
      totalWages: 97000,
      premiumContributions: 7000,
      result: 90000,
    } as DataEntity);

  let state: DataPartialState;

  beforeEach(() => {
    state = {
      data: dataAdapter.setAll(
        [
          createDataEntity('PRODUCT-AAA'),
          createDataEntity('PRODUCT-BBB'),
          createDataEntity('PRODUCT-CCC'),
        ],
        {
          ...initialDataState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        },
      ),
    };
  });

  describe('Data Selectors', () => {
    it('selectAllData() should return the list of Data', () => {
      const results = DataSelectors.selectAllData(state);
      const selId = getDataId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = DataSelectors.selectEntity(state) as DataEntity;
      const selId = getDataId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectDataLoaded() should return the current "loaded" status', () => {
      const result = DataSelectors.selectDataLoaded(state);

      expect(result).toBe(true);
    });

    it('selectDataError() should return the current "error" state', () => {
      const result = DataSelectors.selectDataError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
