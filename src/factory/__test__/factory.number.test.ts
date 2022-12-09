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
});