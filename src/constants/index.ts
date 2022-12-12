export enum Countries {
  IN = "IN",
  US = "US",
}

export const SEX = {
  MALE: "male",
  FEMALE: "female",
}

export enum ERRORS {
  RANGE_ERROR = "maximum value cannot be less than minimum value",
  TYPE_ERROR = "types of passed parameters is incorrect",
  SEX_ERROR = "Invalid enum value. Expected 'male' | 'female', received 'random text'",
}