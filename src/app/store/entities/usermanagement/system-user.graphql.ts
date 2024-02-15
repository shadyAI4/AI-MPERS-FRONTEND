import {gql} from "apollo-angular";
import { basePageableGraphqlField, baseResponseGraphqlField } from "src/app/store/base.graphql";

export const  userProfileField = `
id
profileUniqueId
userFirstName
userLastName
userEmail
profilePhone
profileGender
userNickname
profileTitle
profilePhoto
profileIsActive
profileType
profileHasBeenVerified
`;

export const rolePermissionsField =`
id
permissionUniqueId
permissionName
permissionCode
`

export const  userRolesField = `
id
roleUniqueId
roleName
roleDescription
rolePermissions {
  ${rolePermissionsField}
}
`;

export const usersField = `
id
userProfile {
  ${userProfileField}
}
userRoles {
  ${userRolesField}
}


`
export const REGISTER_USER_MUTATION = gql`
mutation RegisterUserMutation($input: UserRegistrationInputObject!) {
    registerUserMutation(input: $input) {
      response {
        id
        status
        code
        message
      }
    }
  }
`;
export const CREATE_USERS = gql`
    mutation CreateUsersMutation($input: UserInputObject!) {
        createUsersMutation(input: $input) {
            response {
                ${baseResponseGraphqlField}
            }
            data {
                ${usersField}
            }
        }
    }
`;


export const ASSIGN_USERS_TO_DESIGNATION = gql`
    mutation AssignUserToDesignationMutation($input: DesignationUsersInputObjects!) {
        assignUserToDesignationMutation(input: $input) {
            response {
                ${baseResponseGraphqlField}
            }
            data {
                ${usersField}
            }
        }
    }
`;

export const UPDATE_USERS = gql`
    mutation UpdateUsersMutation($input: UserInputObject!) {
        updateUsersMutation(input: $input) {
            response {
                ${baseResponseGraphqlField}
            }
            data {
                ${usersField}
            }
        }
    }
`;

export const GET_USERS = gql`
    query GetUsers($filtering: UserFilteringInputObject){
        getUsers(filtering:$filtering){
            response {
                ${baseResponseGraphqlField}
            }
            page{
                ${basePageableGraphqlField}
            }
            data {
                ${usersField}
            }
        }
    }
`;

export const DELETE_USERS = gql`
    mutation DeleteUsersMutation($profileUniqueId: String!) {
        deleteUsersMutation(profileUniqueId: $profileUniqueId) {
            response {
                ${baseResponseGraphqlField}
            }
        }
    }
`;
