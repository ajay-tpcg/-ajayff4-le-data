import { IntOptions } from "./number";

export type SexType = "male" | "female";

export type NameOptions = {
  sex?: SexType;
}

export type AgeOptions = Pick<IntOptions,'max'|'min'>;

export type FullNameOptions = {
  middle?: boolean;
  sex?: SexType;
}

export type GenderOptions = {
  binary?: boolean;
}