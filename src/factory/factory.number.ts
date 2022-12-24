import { FloatOptions, IntOptions } from "../types/number";
import { z } from "zod";
import utils from "../utils";
import { ERRORS } from "../constants";
import { hexSet, octSet } from "../collections/Number";

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
      return utils.getNumberBetween(_min, _max);
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  float(options?:FloatOptions) {
    const _min = options?.min ?? Number.MIN_VALUE;
    const _max = options?.max ?? Number.MAX_VALUE;
    const _precision = options?.precision ?? 2;
    
    const schema = z.object({
      min: z.number({invalid_type_error:ERRORS.TYPE_ERROR})
      .min(_min, {message:ERRORS.RANGE_ERROR}).optional(),
      max: z.number({invalid_type_error:ERRORS.TYPE_ERROR})
      .max(_max, {message:ERRORS.RANGE_ERROR}).optional(),
      precision: z.number({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    })
    .refine(() => {
      if (_max < _min) return false;
      else return true;
    }, ERRORS.RANGE_ERROR)
    .optional();

    const res = schema.safeParse(options);
    if (res.success) {
      return utils.getNumberBetween(_min, _max, _precision);
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  oct(length=1) {
    const schema = z.number({invalid_type_error:ERRORS.TYPE_ERROR});
    const res = schema.safeParse(length);
    if (res.success) {
      let str = '0o';
      for (let i=0; i<length; i++) {
        str = str.concat(utils.getRandomValue(octSet));
      }
      return str;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  hex(length=1) {
    const schema = z.number({invalid_type_error:ERRORS.TYPE_ERROR});
    const res = schema.safeParse(length);
    if (res.success) {
      let str = '0x';
      for (let i=0; i<length; i++) {
        str = str.concat(utils.getRandomValue(hexSet));
      }
      return str;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }
}

export default NumberFactory;