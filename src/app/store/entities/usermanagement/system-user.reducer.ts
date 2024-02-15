import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { SystemUsers } from './system-user.model';
import * as SystemUsersActions from './system-user.actions';

export const systemUsersesFeatureKey = 'systemUserses';

export interface State extends EntityState<SystemUsers> {
  // additional entities state properties
}

export const adapter: EntityAdapter<SystemUsers> = createEntityAdapter<SystemUsers>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(SystemUsersActions.addSystemUsers,
    (state, action) => adapter.addOne(action.systemUsers, state)
  ),
  on(SystemUsersActions.upsertSystemUsers,
    (state, action) => adapter.upsertOne(action.systemUsers, state)
  ),
  on(SystemUsersActions.addSystemUserss,
    (state, action) => adapter.addMany(action.systemUserss, state)
  ),
  on(SystemUsersActions.upsertSystemUserss,
    (state, action) => adapter.upsertMany(action.systemUserss, state)
  ),
  on(SystemUsersActions.updateSystemUsers,
    (state, action) => adapter.updateOne(action.systemUsers, state)
  ),
  on(SystemUsersActions.updateSystemUserss,
    (state, action) => adapter.updateMany(action.systemUserss, state)
  ),
  on(SystemUsersActions.deleteSystemUsers,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(SystemUsersActions.deleteSystemUserss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(SystemUsersActions.loadSystemUserss,
    (state, action) => adapter.setAll(action.systemUserss, state)
  ),
  on(SystemUsersActions.clearSystemUserss,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
