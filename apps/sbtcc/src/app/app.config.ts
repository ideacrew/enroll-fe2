import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
// import * as fromData from './+state/data.reducer';
// import { DataEffects } from './+state/data.effects';
import { dataReducer } from './+state/data.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideStore({ dataState: dataReducer }),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    // provideState(fromData.DATA_FEATURE_KEY, fromData.dataReducer),
    // provideEffects(DataEffects),
    provideAnimations(),
  ],
};
