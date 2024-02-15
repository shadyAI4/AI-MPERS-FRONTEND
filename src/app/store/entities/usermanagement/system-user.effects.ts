import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
// import { NotificationService } from 'src/app/services/notification.service';
import { AppState } from 'src/app/store/reducers';
import * as fromActions from './system-user.actions';
import * as fromGraphql from './system-user.graphql'
import { map, switchMap } from 'rxjs';
// import { PaginationService } from 'src/app/services/pagination.service';


@Injectable()
export class SystemUsersEffects {
  

  registerUsersMutation = createEffect(() => this.actions$.pipe(
    ofType(fromActions.registerUsersMutation),
    switchMap((action) => {
      return this.apollo.mutate({
        mutation: fromGraphql.REGISTER_USER_MUTATION,
        variables: {
          input: action?.input
        }
      }).pipe(
        // this.notificationService.catchError('Problem occurred while saving record'),
        map(({ data }: any) => {

          if (data) {
            const result: any = Object.values(data)[0];

            
            if (result?.response?.code == '9000') {
              this.store.dispatch(
                fromActions.upsertSystemUsers({ systemUsers: result?.data })
              );
            //   this.notificationService.successMessage('Created Successfully');
            } else {
            //   this.notificationService.errorMessage(result?.response?.message + ' code:' + result?.response?.code);
            }
          }
        })
      );
    })
  ), { dispatch: false });

  assignUserToDesignationMutation = createEffect(() => this.actions$.pipe(
    ofType(fromActions.assignUserToDesignationMutation),
    switchMap((action) => {
      return this.apollo.mutate({
        mutation: fromGraphql.ASSIGN_USERS_TO_DESIGNATION,
        variables: {
          input: action?.input
        }
      }).pipe(
        // this.notificationService.catchError('Problem occurred while saving record'),
        map(({ data }: any) => {

          if (data) {
            const result: any = Object.values(data)[0];

            
            if (result?.response?.code == '9000') {
              this.store.dispatch(
                fromActions.upsertSystemUsers({ systemUsers: result?.data })
              );
            //   this.notificationService.successMessage('Assigned  Successfully');
            } else {
            //   this.notificationService.errorMessage(result?.response?.message + ' code:' + result?.response?.code);
            }
          }
        })
      );
    })
  ), { dispatch: false });

  updateUsersMutation = createEffect(() => this.actions$.pipe(
    ofType(fromActions.updateUsersMutation),
    switchMap((action) => {
      return this.apollo.mutate({
        mutation: fromGraphql.UPDATE_USERS,
        variables: {
          input: action?.input
        }
      }).pipe(
        // this.notificationService.catchError('Problem occurred while updating record'),
        map(({ data }: any) => {
          if (data) {
            const result: any = Object.values(data)[0];
            if (result?.response?.code == '9000') {
              this.store.dispatch(
                fromActions.upsertSystemUsers({ systemUsers: result?.data })
              );
            //   this.notificationService.successMessage('Updated Successfully');
            }
            else {
            //   this.notificationService.errorMessage(result?.response?.message + ' code:' + result?.response?.code);
            }
          }
        })
      );
    })
  ), { dispatch: false });

  getUsers = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getUsers),
    switchMap((action) => {
      return this.apollo.query({
        query: fromGraphql.GET_USERS,
        fetchPolicy: 'network-only',
        variables:{
          // filtering:{
          //   profileType:action.filtering.profileType,
          //   pageNumber:action.filtering.pageNumber,
          //   profileUniqueId: action.filtering.profileUniqueId,
 
          // }
        }
      }).pipe(
        // this.notificationService.catchError('Problem occurred while fetching system users'),
        map(({ data }: any ) => {
          if (data) {
            const result: any = Object.values(data)[0];
            // this.paginationService.setPage(result?.page)
            result?.response?.status ? this.store.dispatch(fromActions.loadSystemUserss({ systemUserss: result?.data })) : []
          }
        })
      );
    })
  ), { dispatch: false });

  deleteUsersMutation = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deleteUsersMutation),
    switchMap((action) => {
      return this.apollo.mutate({
        mutation: fromGraphql.DELETE_USERS,
        variables: {
          profileUniqueId: action?.profileUniqueId
        }
      }).pipe(
        // this.notificationService.catchError('Problem occurred while deleting record'),
        map(({ data }: any) => {
          if (data) {
            const result: any = Object.values(data)[0];
            if (result?.response?.code == '9000') {
              this.store.dispatch(fromActions.deleteSystemUsers({ id: action.id }));
            //   this.notificationService.successMessage('Deleted Successfully');
            } else {
            //   this.notificationService.errorMessage(result?.response?.message + ' code:' + result?.response?.code);
            }
          }
        })
      );
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private apollo: Apollo,
    private store: Store<AppState>,
    // private paginationService: PaginationService,
    // private notificationService: NotificationService
  ) {}
}
