import utils from '../utils';
import { person } from '../collections';
import { AgeOptions, FullNameOptions, GenderOptions, NameOptions } from '../types/person';
import { ERRORS, SEX } from '../constants';
import { z } from 'zod';

class PersonFactory {

  age(options?:AgeOptions) {
    const _min = options?.min ?? 0;
    const _max = options?.max ?? 100;
    
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

  firstName(options?:NameOptions) {
    let _first_name = "";
    const schema = z.object({
      sex: z.nativeEnum(SEX).optional(),
    }).optional();
    const res = schema.safeParse(options);

    if(res.success) {
      if (options?.sex===SEX.MALE) {
        _first_name = utils.getRandomValue(person.maleFirstNames);
      } else if (options?.sex===SEX.FEMALE) {
        _first_name = utils.getRandomValue(person.femaleFirstNames);
      } else {
        _first_name = utils.getRandomValue([...person.maleFirstNames, ...person.femaleFirstNames]);
      }
      return _first_name;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  middleName(options?:NameOptions) {
    let _middle_name = "";
    const schema = z.object({
      sex: z.nativeEnum(SEX).optional(),
    }).optional();
    const res = schema.safeParse(options);

    if(res.success) {
      if (options?.sex===SEX.MALE) {
        _middle_name = utils.getRandomValue(person.maleMiddleNames);
      } else if (options?.sex===SEX.FEMALE) {
        _middle_name = utils.getRandomValue(person.femaleMiddleNames);
      } else {
        _middle_name = utils.getRandomValue([...person.maleMiddleNames, ...person.femaleMiddleNames]);
      }
      return _middle_name;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  lastName(options?:NameOptions) {
    let _last_name = "";
    const schema = z.object({
      sex: z.nativeEnum(SEX).optional(),
    }).optional();
    const res = schema.safeParse(options);

    if(res.success) {
      if (options?.sex===SEX.MALE) {
        _last_name = utils.getRandomValue([...person.maleLastNames, ...person.commonLastNames ]);
      } else if (options?.sex===SEX.FEMALE) {
        _last_name = utils.getRandomValue([...person.femaleLastNames, ...person.commonLastNames]);
      } else {
        _last_name = utils.getRandomValue([...person.maleLastNames, ...person.femaleLastNames, ...person.commonLastNames]);
      }
      return _last_name;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  fullName(options?:FullNameOptions) {
    const schema = z.object({
      sex: z.nativeEnum(SEX).optional(),
      middle: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(), 
    }).optional();
    const res = schema.safeParse(options);

    if(res.success) {
      if (options?.middle) {
        return this.firstName({sex:options?.sex}) + " " + this.middleName({sex:options?.sex}) + " " + this.lastName({sex:options?.sex});
      } else {
        return this.firstName({sex:options?.sex}) + " " + this.lastName({sex:options?.sex});
      }
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  gender(options?:GenderOptions) {
    const _binary = options?.binary ?? true;
    let _gender = '';

    const schema = z.object({
      binary: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    }).optional();
    const res = schema.safeParse(options);

    if(res.success) {
      if(_binary) {
        _gender = utils.getRandomValue(Object.values(SEX));
      } else {
        _gender = utils.getRandomValue(person.genders);
      }
      return _gender;
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

}

export default PersonFactory;
