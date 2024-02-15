
import { createSelector } from '@ngrx/store';

import { AppState } from '../../reducers/index';

import * as fromSystemUsersReducer from './system-user.reducer';
import { SystemUsers } from './system-user.model';

export const currentState = (state: AppState) => (state[fromSystemUsersReducer.systemUsersesFeatureKey]);

export const selectAllSystemUsers = createSelector(currentState, fromSystemUsersReducer.selectAll);


export const selectModifiedSystemUsers = createSelector(selectAllSystemUsers, (systemsusers) => {
  return systemsusers.map((user) => {
    return {
      ...user,
      userFullNameMod:user.userProfile.userFirstName +" "+user.userProfile.userLastName,
      userEmailMod:user.userProfile.userEmail,
      profilePhoneMod:user.userProfile.profilePhone,
      profileTypeMod:user.userProfile.profileType,
      profileTitleMod:user.userProfile.profileTitle,
      userRole:user.userRoles?.roleName,
    };
  });
});


export const selectModifiedUserByUniqueId= (profileUniqueId: string) =>
  createSelector(selectModifiedSystemUsers, (users: SystemUsers[]) => {
    return users.filter((user) => user?.userProfile?.profileUniqueId === profileUniqueId);
  });
