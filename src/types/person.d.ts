import { IntOptions } from "./number";

export type SexType = "male" | "female";

export type NameOptions = {
  sex?: SexType;
}

export type AgeOptions = IntOptions;

export type FullNameOptions = {
  middle?: boolean;
  sex?: SexType;
}

export type GenderOptions = {
  binary?: boolean;
}