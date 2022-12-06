import { IntOptions } from "../types/number";

class NumberFactory {

  int(options?:IntOptions) {
    const _min = options?.min ?? Number.MIN_SAFE_INTEGER;
    const _max = options?.max ?? Number.MAX_SAFE_INTEGER;
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
  }
}

export default NumberFactory;