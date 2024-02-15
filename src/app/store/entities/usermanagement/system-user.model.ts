
export interface SystemUsers {
  id:string;
  userProfile:UserProfile;
  userRoles:UserRoles;
}

export interface UserProfile{
  id?:string
  profileUniqueId?:string
  userFirstName?:string
  userLastName?:string
  userEmail?:string
  profilePhone?:string
  profileGender?:String
  userNickname?: string
  profileTitle?:string
  profilePhoto?:string
  profileIsActive?:string
  profileType?:ProfileTypeEnum;
}


export enum ProfileTypeEnum {
    ADMIN = 'ADMIN',
    PLAYER = 'PLAYER',
    GAME_MANAGER = 'GAME_MANAGER',
    ACCOUNTANT = 'ACCOUNTANT',
    CUSTOMER_CARE = 'CUSTOMER_CARE',
}


export enum ProfileTitleEnum {
  Mr = 'Mr',
  Mrs = 'Mrs',
  Prof = 'Prof',
  Dr = 'Dr',
  Ms = 'Ms',
  Eng = 'Eng'
  }


export const ProfileTypeEumArray =[
  
  {name:ProfileTypeEnum.ADMIN,value:ProfileTypeEnum.ADMIN},
  {name:ProfileTypeEnum.PLAYER,value:ProfileTypeEnum.PLAYER},
  {name:ProfileTypeEnum.GAME_MANAGER,value:ProfileTypeEnum.GAME_MANAGER},
  {name:ProfileTypeEnum.ACCOUNTANT,value:ProfileTypeEnum.ACCOUNTANT},
  {name:ProfileTypeEnum.CUSTOMER_CARE,value:ProfileTypeEnum.CUSTOMER_CARE},
 
]

  export interface UserRoles{
    id:string;
    roleUniqueId:string;
    roleName:string;
    roleDescription:string;
    rolePermissions:RolePermissions
  }


  export interface RolePermissions {
    id:string;
    permissionUniqueId:string;
    permissionName:string;
    permissionCode:string;
  }

  export interface filteringInput {
   profileType?: string,
   pageNumber?:number,
   profileUniqueId?:string
  }


  export interface userInput {
    userLastName: string,
    userFirstName: string,
    userNickname: string,
    profileTitle:string,
    profileType:string,
    // password: string,
    // confirmPassword:string,
  }

  export interface userDesignationInput{
    profileUniqueId: string;
    designationUniqueId:string;
  }

  // "username": "shady@gmail.com",
  // "userLastName": "Fredy",
  // "userFirstName": "Douis",
  // "userEmail": "shady@gmail.com",
  // "profileType": "PLAYER",
  // "profileGender": "MALE",
  // "password": "12345",
  // "confirmPassword": "12345"