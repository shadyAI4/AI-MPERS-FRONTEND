import {ActionReducerMap, MetaReducer,} from '@ngrx/store';
import {environment} from 'src/environments/environment';
import * as fromSystemUsers from '../entities/usermanagement/system-user.reducer';






export interface AppState {

  [fromSystemUsers.systemUsersesFeatureKey]: fromSystemUsers.State;


}

export const reducers: ActionReducerMap<AppState> = {
  
  [fromSystemUsers.systemUsersesFeatureKey]: fromSystemUsers.reducer,


};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
