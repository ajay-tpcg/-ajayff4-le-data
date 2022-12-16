export enum Countries {
  IN = "IN",
  US = "US",
}

export enum ERRORS {
  RANGE_ERROR = "maximum value cannot be less than minimum value",
  TYPE_ERROR = "types of passed parameters is incorrect",
  SEX_ERROR = "Invalid enum value. Expected 'male' | 'female', received 'random text'",
}

export const SEX = {
  MALE: "male",
  FEMALE: "female",
}

export const SEED = {
  UPPER: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  LOWER: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  NUMBER: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
}