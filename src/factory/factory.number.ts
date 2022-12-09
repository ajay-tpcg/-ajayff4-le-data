import { IntOptions } from "../types/number";
import { z } from "zod";
import utils from "../utils";
import { ERRORS } from "../constants";

class NumberFactory {

  int(options?:IntOptions) {
    const _min = options?.min ?? Number.MIN_SAFE_INTEGER;
    const _max = options?.max ?? Number.MAX_SAFE_INTEGER;
    
    const schema = z.object({
      min: z.number({invalid_type_error:ERRORS.TYPE_ERROR})
      .min(_min, {message:ERRORS.RANGE_ERROR}).optional(),
      max: z.number({invalid_type_error:ERRORS.TYPE_ERROR})
      .max(_max, {message:ERRORS.RANGE_ERROR}).optional(),
    })
    .refine(() => {
      if (_max < _min) return false;
      else return true;
    }, ERRORS.RANGE_ERROR)
    .optional();

    const res = schema.safeParse(options);
    if (res.success) {
      return Math.floor(Math.random() * (_max - _min + 1) + _min);
    } else {
      utils.throwErrors(res.error.issues);
    }
  }
}

export default NumberFactory;