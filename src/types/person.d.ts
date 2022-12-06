import { SEX } from "../constants";
import { IntOptions } from "./number";

export type NameOptions = {
  sex?: SEX;
}

export type AgeOptions = Pick<IntOptions,'max'|'min'>;

export type FullNameOptions = {
  middle?: boolean;
  sex?: SEX;
}

export type GenderOptions = {
  binary?: boolean;
}