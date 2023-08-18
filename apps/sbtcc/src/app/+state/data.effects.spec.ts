import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as DataActions from './data.actions';
import { DataEffects } from './data.effects';

describe('DataEffects', () => {
  let actions: Observable<Action>;
  let effects: DataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DataEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(DataEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DataActions.initData() });

      const expected = hot('-a-|', {
        a: DataActions.loadDataSuccess({ data: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
