import { ERRORS } from '../../constants';
import NumberFactory from '../factory.number';

describe('it tests the number module', () => {
  let factory: NumberFactory;
  beforeAll(() => {
    factory = new NumberFactory();
  });

  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });

  it('returns integer in the default integer range', () => {
    const num = factory.int();
    expect(num).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
    expect(num).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  });

  it('returns integer in the given integer range', () => {
    const num = factory.int({min:18, max:25});
    expect(num).toBeGreaterThanOrEqual(18);
    expect(num).toBeLessThanOrEqual(25);
  });

  it('throws error if parameters are of incorrect types', () => {
    const fun = () => {
      return factory.int({min:"1" as any, max:10});
    } 
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

  it('throws error if minimum range is greater than maximum range', () => {
    const fun = () => {
      return factory.int({min:100, max:10});
    } 
    expect(fun).toThrow(ERRORS.RANGE_ERROR);
  });


  it('returns floating point number in the default range', () => {
    const num = factory.float();
    expect(num).toBeGreaterThanOrEqual(Number.MIN_VALUE);
    expect(num).toBeLessThanOrEqual(Number.MAX_VALUE);
  });

  it('returns floating point number in the given range', () => {
    const num = factory.float({min:0, max:1, precision:3});
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(1);
  });

  it('throws error if parameters are of incorrect types', () => {
    const fun = () => {
      return factory.float({min:"1" as any, max:10});
    } 
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

  it('throws error if minimum range is greater than maximum range', () => {
    const fun = () => {
      return factory.float({min:100, max:10});
    } 
    expect(fun).toThrow(ERRORS.RANGE_ERROR);
  });


  it('returns octal string of the length 1 bydefault', () => {
    const str = factory.oct();
    expect(str).toContain('0o');
    expect(str).toHaveLength(3);
  });

  it('returns octal string of the given length', () => {
    const str = factory.oct(4);
    expect(str).toContain('0o');
    expect(str).toHaveLength(6);
  });

  it('throws error if parameters are of incorrect types', () => {
    const fun = () => {
      return factory.oct("2" as any);
    } 
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns hexadecimal string of the length 1 bydefault', () => {
    const str = factory.hex();
    expect(str).toContain('0x');
    expect(str).toHaveLength(3);
  });

  it('returns hexadecimal string of the given length', () => {
    const str = factory.hex(4);
    expect(str).toContain('0x');
    expect(str).toHaveLength(6);
  });

  it('throws error if parameters are of incorrect types', () => {
    const fun = () => {
      return factory.hex("2" as any);
    } 
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });
});