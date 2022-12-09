import { z } from "zod";
import { ERRORS } from "../constants";
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

  seed(length?:number) {
    const _length = length ?? 10;
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    let seed = Array<string>();
    const schema = z.number({invalid_type_error:ERRORS.TYPE_ERROR}).optional();
    const res = schema.safeParse(length);
    if (res.success) {
      for(let i = 0; i < _length; i++) {
        seed += utils.getRandomValue(str);
      }
      return seed;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }
}

export default UtilsFactory;