import { ERRORS } from '../../constants';
import { commonLastNames, femaleFirstNames, femaleLastNames, femaleMiddleNames, genders, maleFirstNames, maleLastNames, maleMiddleNames } from '../../collections/Person'
import PersonFactory from '../factory.person';

describe('it tests the number module', () => {
  let factory: PersonFactory;
  beforeAll(() => {
    factory = new PersonFactory();
  });


  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });


  it('returns age in the default integer range', () => {
    const age = factory.age();
    expect(age).toBeGreaterThanOrEqual(0);
    expect(age).toBeLessThanOrEqual(100);
  });

  it('returns age in the given integer range', () => {
    const age = factory.age({min:18, max:25});
    expect(age).toBeGreaterThanOrEqual(18);
    expect(age).toBeLessThanOrEqual(25);
  });

  it('throws error if parameters are of incorrect types', () => {
    const fun = () => {
      return factory.age({min:"1" as any, max:10});
    } 
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

  it('throws error if minimum range is greater than maximum range', () => {
    const fun = () => {
      return factory.age({min:100, max:10});
    } 
    expect(fun).toThrow(ERRORS.RANGE_ERROR);
  });


  it('returns gender in the binary as "male" or "female"', () => {
    const gender = factory.gender();
    if (gender) {
      expect(["male", "female"].includes(gender)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns gender in the non-binary', () => {
    const gender = factory.gender({binary: false});
    if (gender) {
      expect(genders.includes(gender)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is not of boolean type', () => {
    const fun = () => {
      return factory.gender({binary: null as any});
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns firstName of male or female', () => {
    const firstName = factory.firstName();
    if (firstName) {
      expect([...femaleFirstNames, ...maleFirstNames].includes(firstName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns firstName of female', () => {
    const firstName = factory.firstName({sex: "female"});
    if (firstName) {
      expect(femaleFirstNames.includes(firstName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns firstName of male', () => {
    const firstName = factory.firstName({sex: "male"});
    if (firstName) {
      expect(maleFirstNames.includes(firstName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is not of given sex types', () => {
    const fun = () => {
      return factory.firstName({sex: "random text" as any});
    }
    expect(fun).toThrow(ERRORS.SEX_ERROR);
  });


  it('returns middleName of male or female', () => {
    const middleName = factory.middleName();
    if (middleName) {
      expect([...femaleMiddleNames, ...maleMiddleNames].includes(middleName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns middleName of female', () => {
    const middleName = factory.middleName({sex: "female"});
    if (middleName) {
      expect(femaleMiddleNames.includes(middleName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns middleName of male', () => {
    const middleName = factory.middleName({sex: "male"});
    if (middleName) {
      expect(maleMiddleNames.includes(middleName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is not of given sex types', () => {
    const fun = () => {
      return factory.middleName({sex: "random text" as any});
    }
    expect(fun).toThrow(ERRORS.SEX_ERROR);
  });


  it('returns lastName of male or female', () => {
    const lastName = factory.lastName();
    if (lastName) {
      expect([...femaleLastNames, ...maleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns lastName of female', () => {
    const lastName = factory.lastName({sex: "female"});
    if (lastName) {
      expect([...femaleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns lastName of male', () => {
    const lastName = factory.lastName({sex: "male"});
    if (lastName) {
      expect([...maleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is not of given sex types', () => {
    const fun = () => {
      return factory.lastName({sex: "random text" as any});
    }
    expect(fun).toThrow(ERRORS.SEX_ERROR);
  });


  it('returns full name of male or female', () => {
    const fullName = factory.fullName();
    if (fullName) {
      const [firstName, lastName] = fullName.split(" ");
      expect(fullName.split(" ")).toHaveLength(2);
      expect([...femaleFirstNames, ...maleFirstNames].includes(firstName)).toBe(true);
      expect([...femaleLastNames, ...maleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns full name of female', () => {
    const fullName = factory.fullName({middle:false, sex: "female"});
    if (fullName) {
      const [firstName, lastName] = fullName.split(" ");
      expect(fullName.split(" ")).toHaveLength(2);
      expect(femaleFirstNames.includes(firstName)).toBe(true);
      expect([...femaleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns full name of male', () => {
    const fullName = factory.fullName({middle:false, sex: "male"});
    if (fullName) {
      const [firstName, lastName] = fullName.split(" ");
      expect(fullName.split(" ")).toHaveLength(2);
      expect(maleFirstNames.includes(firstName)).toBe(true);
      expect([...maleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns full name of male or female with middle name', () => {
    const fullName = factory.fullName({middle:true});
    if (fullName) {
      const [firstName, middleName, lastName] = fullName.split(" ");
      expect(fullName.split(" ")).toHaveLength(3);
      expect([...femaleFirstNames, ...maleFirstNames].includes(firstName)).toBe(true);
      expect([...femaleMiddleNames, ...maleMiddleNames].includes(middleName)).toBe(true);
      expect([...femaleLastNames, ...maleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns full name of female with middle name', () => {
    const fullName = factory.fullName({middle:true, sex:"female"});
    if (fullName) {
      const [firstName, middleName, lastName] = fullName.split(" ");
      expect(fullName.split(" ")).toHaveLength(3);
      expect(femaleFirstNames.includes(firstName)).toBe(true);
      expect(femaleMiddleNames.includes(middleName)).toBe(true);
      expect([...femaleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns full name of male with middle name', () => {
    const fullName = factory.fullName({middle:true, sex:"male"});
    if (fullName) {
      const [firstName, middleName, lastName] = fullName.split(" ");
      expect(fullName.split(" ")).toHaveLength(3);
      expect(maleFirstNames.includes(firstName)).toBe(true);
      expect(maleMiddleNames.includes(middleName)).toBe(true);
      expect([...maleLastNames, ...commonLastNames].includes(lastName)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is not of given sex types', () => {
    const fun = () => {
      return factory.fullName({sex: "random text" as any});
    }
    expect(fun).toThrow(ERRORS.SEX_ERROR);
  });

  it('throws error if parameter is not of given boolean values', () => {
    const fun = () => {
      return factory.fullName({middle: null as any});
    }
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

});