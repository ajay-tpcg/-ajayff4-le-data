export type IntOptions = {
  min?: number;
  max?: number;
}

export type FloatOptions = IntOptions & {
  precision?: number;
}