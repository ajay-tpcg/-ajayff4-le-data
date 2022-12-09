import { ERRORS } from "../../constants";
import UtilsFactory from "../factory.utils";

describe('it tests the utils module', () => {
  let factory:UtilsFactory;
  beforeAll(() => {
    factory = new UtilsFactory();
  });

  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });

  it('returns seed string of 10 length', () => {
    const seed = factory.seed();
    expect(seed).toHaveLength(10);
  });

  it('returns seed string of asked length', () => {
    const seed = factory.seed(21);
    expect(seed).toHaveLength(21);
  });

  it('throws error if seed length is not a number', () => {
    const fun = () => {
      return factory.seed("abcd" as any);
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

  it('returns slug for given string', () => {
    const slug = factory.slug('I am Ironman');
    expect(slug).toBe('i-am-ironman');
  });

  it('throws error if text is not a string', () => {
    const fun = () => {
      return factory.slug(null as any);
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });
});