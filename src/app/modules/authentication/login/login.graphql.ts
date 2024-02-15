import {gql} from "apollo-angular";
import {baseResponseGraphqlField} from "../../../store/base.graphql";
import {UserTypesEnum} from '../../../shared/enums/user-types.enum';
import {
  userProfileField,
  userRolesField
} from "../../../store/entities/usermanagement/system-user.graphql";
// import {designationField} from "../../store/entities/user-management/designation/designation.graphql";


export interface ProfileObject {
  id?: string
  profileUniqueId?: string
  userFirstName?: string
  userLastName?: string
  userEmail?: string
  profilePhone?: string
  profileTitle?: string
  profilePhoto?: string
  profileType?: UserTypesEnum
  
}


export const userProfileFields = `
id
userProfile {
  ${userProfileField}
}
userRoles {
  ${userRolesField}
}

`

export const userMyProfileFields = `
id
profileUniqueId
userFirstName
userLastName
userEmail
profilePhone
profileTitle
profilePhoto
profileIsActive
profileType

`


export const GET_USER_PROFILE = gql`
  query GetUserProfileAndRole {
  getUserProfileAndRole {
    response {
      ${baseResponseGraphqlField}
    }
    data {
      ${userProfileFields}
    }
  }
}
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateMyUserProfileMutation($input: UserInputObject) {
    updateMyUserProfileMutation(input: $input) {
     response{
      ${baseResponseGraphqlField}
     }
      data {
        ${userMyProfileFields}
      }
    }
  }
`