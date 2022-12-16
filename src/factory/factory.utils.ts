import { z } from "zod";
import { ERRORS, SEED } from "../constants";
import { SeedOptions } from "../types/utils";
import utils from "../utils";

// utility methods for help such as slug
class UtilsFactory {

  slug(text:string) {
    const schema = z.string({invalid_type_error: ERRORS.TYPE_ERROR});
    const res = schema.safeParse(text);
    if (res.success) {
      return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  seed(length=21, options?:SeedOptions):Array<string> | undefined {
    const _options = {
      upper: options?.upper ?? true,
      lower: options?.lower ?? true, 
      number: options?.number ?? true,
      addons: options?.addons ?? '',
    };
    const _flags = {
      upper: false,
      lower: false,
      number: false,
      addons: false,
    };
    let str = Array<string>();
    if (options) {
      if (_options.upper) {
        str.push(...SEED.UPPER);
      }
      if (_options.lower) {
        str.push(...SEED.LOWER);
      }
      if (_options.number) {
        str.push(...SEED.NUMBER);
      }
      if (_options.addons) {
        str.push(..._options.addons.split(''));
        str = Array.from(new Set(str));
      }
    } else {
      str = [...SEED.UPPER, ...SEED.LOWER, ...SEED.NUMBER];
    }
    let seed = Array<string>();
    const schema = z.object({
      length: z.number({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
      options: z.object({
        upper: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
        lower: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
        number: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
        addons: z.string({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
      }).optional(),
    });
    const res = schema.safeParse({length:length, options:_options});
    if (res.success) {
      for(let i=0; i<length; i++) {
        const s = utils.getRandomValue(str);
        seed += s;
        if (SEED.UPPER.includes(s)) {
          _flags.upper = true;
        } else if (SEED.LOWER.includes(s)) {
          _flags.lower = true;
        } else if (SEED.NUMBER.includes(s)) {
          _flags.number = true;
        } else if (_options.addons.includes(s)) {
          _flags.addons = true;
        }
      }
      const check = _options.upper === _flags.upper && _options.lower === _flags.lower 
        && _options.number === _flags.number && (_options.addons.length ? _flags.addons : true);
      return check ? seed : this.seed(length,_options);
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  customArray(arr:Array<any>) {
    const schema = z.any().array().nonempty();
    const res = schema.safeParse(arr);
    if (res.success) {
      return utils.getRandomValue(arr);
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  otp(length=6): string | undefined {
    const getStr = (exp:number) => utils.getNumberBetween(Math.pow(10,exp-1), Math.pow(10,exp)-1).toString();
    const schema = z.number({invalid_type_error:ERRORS.TYPE_ERROR}).optional();
    const res = schema.safeParse(length);
    if (res.success) {
      let str = '';
      if (length <= 10) {
        return getStr(length);
      } else {
        let remain = length;
        while(remain > 0) {
          const diff = remain > 10 ? 10 : remain;
          str = str.concat(getStr(diff));
          remain = remain - diff;
        }
        return str;
      }
    } else {
      utils.throwErrors(res.error.issues);
    }
  }
}

export default UtilsFactory;