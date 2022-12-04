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
      _first_name = utils.getRandomValue(person.males);
    } else if (options?.sex===SEX.FEMALE) {
      _first_name = utils.getRandomValue(person.females);
    } else {
      _first_name = utils.getRandomValue([...person.males, ...person.females]);
    }
    return _first_name;
  }

  middleName(options?:NameOptions) {
    return utils.getRandomValue(person.middleNames);
  }

  lastName(options?:NameOptions) {
    return utils.getRandomValue(person.lastNames);
  }

  fullName(options?:FullNameOptions) {
    if (options?.middle) {
      return this.firstName() + " " + this.middleName() + " " + this.lastName();
    } else {
      return this.firstName() + " " + this.lastName();
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
