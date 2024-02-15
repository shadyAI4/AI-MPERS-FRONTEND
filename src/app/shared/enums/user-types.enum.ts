export function enumToObjectArray(
    enum_obj: any
  ): { name: string; key: string }[] {
    var array = [];
    for (const key in enum_obj)
      array.push({ name: key.replace('_', ' '), key: enum_obj[key] });
    return array;
  }

export enum UserTypesEnum {
    ADMIN = 'ADMIN',
    DOCTOR = 'DOCTOR',
    PHARMACIST = 'PHARMACIST',
    PATIENTS = 'PATIENTS',

}


export const USER_TYPES_OBJ = enumToObjectArray(UserTypesEnum)
