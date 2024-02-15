import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { SystemUsers, filteringInput, userDesignationInput, userInput } from './system-user.model';

export const loadSystemUserss = createAction(
  '[SystemUsers/API] Load SystemUserss', 
  props<{ systemUserss: SystemUsers[] }>()
);

export const addSystemUsers = createAction(
  '[SystemUsers/API] Add SystemUsers',
  props<{ systemUsers: SystemUsers }>()
);

export const upsertSystemUsers = createAction(
  '[SystemUsers/API] Upsert SystemUsers',
  props<{ systemUsers: SystemUsers }>()
);

export const addSystemUserss = createAction(
  '[SystemUsers/API] Add SystemUserss',
  props<{ systemUserss: SystemUsers[] }>()
);

export const upsertSystemUserss = createAction(
  '[SystemUsers/API] Upsert SystemUserss',
  props<{ systemUserss: SystemUsers[] }>()
);

export const updateSystemUsers = createAction(
  '[SystemUsers/API] Update SystemUsers',
  props<{ systemUsers: Update<SystemUsers> }>()
);

export const updateSystemUserss = createAction(
  '[SystemUsers/API] Update SystemUserss',
  props<{ systemUserss: Update<SystemUsers>[] }>()
);

export const deleteSystemUsers = createAction(
  '[SystemUsers/API] Delete SystemUsers',
  props<{ id: string }>()
);

export const deleteSystemUserss = createAction(
  '[SystemUsers/API] Delete SystemUserss',
  props<{ ids: string[] }>()
);

export const clearSystemUserss = createAction(
  '[SystemUsers/API] Clear SystemUserss'
);


// CUSTOMM


export const registerUsersMutation = createAction(
  '[SystemUsers/API] create System Userss',
  props<{ input: userInput }>()
);



export const updateUsersMutation = createAction(
  '[SystemUsers/API] update Users Mutation',
  props<{ input: userInput }>()
);



export const getUsers = createAction(
  '[SystemUsers/API] GET System Userss',
  props<{ filtering?:filteringInput }>()
);



export const deleteUsersMutation = createAction(
  '[SystemUsers/API] delete Users Mutation',
  props<{ profileUniqueId?: string,id:string }>()
);


export const assignUserToDesignationMutation = createAction(
  '[SystemUsers/API] Assign User To Designation Mutation',
  props<{ input: userDesignationInput }>()
);
