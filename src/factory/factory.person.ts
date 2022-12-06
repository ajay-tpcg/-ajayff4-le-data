import { SEX } from '../constants';
import utils from '../utils';
import { person } from '../collections';
import { AgeOptions, FullNameOptions, GenderOptions, NameOptions } from '../types/person';
import Ledata from '..';

class PersonFactory {

  age(options?:AgeOptions) {
    return Ledata.number.int({min:options?.min ?? 0, max:options?.max ?? 100});
  }

  firstName(options?:NameOptions) {
    let _first_name = "";
    if (options?.sex===SEX.MALE) {
      _first_name = utils.getRandomValue(person.maleFirstNames);
    } else if (options?.sex===SEX.FEMALE) {
      _first_name = utils.getRandomValue(person.femaleFirstNames);
    } else {
      _first_name = utils.getRandomValue([...person.maleFirstNames, ...person.femaleFirstNames]);
    }
    return _first_name;
  }

  middleName(options?:NameOptions) {
    let _middle_name = "";
    if (options?.sex===SEX.MALE) {
      _middle_name = utils.getRandomValue(person.maleMiddleNames);
    } else if (options?.sex===SEX.FEMALE) {
      _middle_name = utils.getRandomValue(person.femaleMiddleNames);
    } else {
      _middle_name = utils.getRandomValue([...person.maleMiddleNames, ...person.femaleMiddleNames]);
    }
    return _middle_name;
  }

  lastName(options?:NameOptions) {
    let _last_name = "";
    if (options?.sex===SEX.MALE) {
      _last_name = utils.getRandomValue([...person.maleLastNames, ...person.commonLastNames ]);
    } else if (options?.sex===SEX.FEMALE) {
      _last_name = utils.getRandomValue([...person.femaleLastNames, ...person.commonLastNames]);
    } else {
      _last_name = utils.getRandomValue([...person.maleLastNames, ...person.femaleLastNames, ...person.commonLastNames]);
    }
    return _last_name;
  }

  fullName(options?:FullNameOptions) {
    if (options?.middle) {
      return this.firstName({sex:options?.sex}) + " " + this.middleName({sex:options?.sex}) + " " + this.lastName({sex:options?.sex});
    } else {
      return this.firstName({sex:options?.sex}) + " " + this.lastName({sex:options?.sex});
    }
  }

  gender(options?:GenderOptions) {
    const _binary = options?.binary ?? true;
    let _gender = '';
    if(_binary) {
      _gender = utils.getRandomValue(Object.values(SEX));
    } else {
      _gender = utils.getRandomValue(person.gender);
    }
    return _gender;
  }

}

export default PersonFactory;
