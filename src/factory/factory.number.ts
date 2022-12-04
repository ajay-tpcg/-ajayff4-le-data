import { IntOptions } from "../types/number";

class NumberFactory {

  int(options?:IntOptions) {
    const _min = options?.min ?? -2147483648;
    const _max = options?.max ?? 2147483647;
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
  }
}

export default NumberFactory;