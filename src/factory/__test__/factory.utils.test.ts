import { ERRORS, SEED } from "../../constants";
import UtilsFactory from "../factory.utils";

describe('it tests the utils module', () => {
  let factory:UtilsFactory;
  beforeAll(() => {
    factory = new UtilsFactory();
  });

  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });


  it('returns slug for given string', () => {
    const slug = factory.slug('I am Ironman');
    expect(slug).toBe('i-am-ironman');
  });

  it('throws error if slug is not string', () => {
    const fun = () => {
      return factory.slug(null as any);
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns seed string of 21 length', () => {
    const seed = factory.seed();
    expect(seed).toHaveLength(21);
  });

  it('returns seed string of asked length', () => {
    const seed = factory.seed(10);
    expect(seed).toHaveLength(10);
  });

  it('throws error if seed length is not a number', () => {
    const fun = () => {
      return factory.seed("abcd" as any);
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

  it('throws error if options are of incorrect type', () => {
    const fun = () => {
      return factory.seed(10, {number: "1234" as any});
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

  it('returns seed string without numbers', () => {
    const seed = factory.seed(21, {number:false});
    // should remain false to indicate number is not present in seed
    let FLAG = false;
    if (seed) {
      SEED.NUMBER.forEach(num => {
        FLAG = seed?.includes(num);
      })
    }
    expect(FLAG).toBe(false);
    expect(seed).toHaveLength(21);
  });

  it('returns seed string without uppercase letters', () => {
    const seed = factory.seed(21, {upper:false});
    // should remain false to indicate uppercase letter is not present in seed
    let FLAG = false;
    if (seed) {
      SEED.UPPER.forEach(upr => {
        FLAG = seed?.includes(upr);
      })
    }
    expect(FLAG).toBe(false);
    expect(seed).toHaveLength(21);
  });

  it('returns seed string without lowercase letters', () => {
    const seed = factory.seed(21, {lower:false});
    // should remain false to indicate lowercase letter is not present in seed
    let FLAG = false;
    if (seed) {
      SEED.LOWER.forEach(lwr => {
        FLAG = seed?.includes(lwr);
      })
    }
    expect(FLAG).toBe(false);
    expect(seed).toHaveLength(21);
  });

  it('returns seed string with addons', () => {
    const addons = './+';
    const seed = factory.seed(10, {addons:addons});
    // should remain true to indicate addons is present in seed
    let FLAG = false;
    if (seed) {
      for (let char of  addons.split('')) {
        if (seed?.includes(char)) {
          FLAG = true;
          break;
        }
      }
    }
    expect(FLAG).toBe(true);
    expect(seed).toHaveLength(10);
  });

  it('throws error if seed options are of incorrect type', () => {
    const fun = () => {
      return factory.seed(10, {number: "1234" as any});
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns an element from given array of element', () => {
    const arr = [false, undefined, null, "", 0, 0.0];
    const element = factory.customArray(arr);
    expect(arr.includes(element)).toBe(true);
  });

  it('throws error if array is not is null, undefined or any falsy value', () => {
    const fun = () => {
      return factory.customArray(null as any);
    }
    expect(fun).toThrow("Expected array, received null");
  });


  it('returns otp of 6 length', () => {
    const otp = factory.otp();
    expect(otp).toHaveLength(6);
  });

  it('returns otp of 12 length', () => {
    const otp = factory.otp(12);
    expect(otp).toHaveLength(12);
  });

  it('throws type error for incorrect length', () => {
    const fun = () => {
      return factory.otp(null as any);
    };
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

});