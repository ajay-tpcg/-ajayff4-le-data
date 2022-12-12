import CardFactory from './factory/factory.card';
import ColorFactory from './factory/factory.color';
import IdFactory from './factory/factory.id';
import LocationFactory from './factory/factory.location';
import NumberFactory from './factory/factory.number';
import PersonFactory from './factory/factory.person';
import ProductFactory from './factory/factory.product';
import StringFactory from './factory/factory.string';
import UtilsFactory from './factory/factory.utils';
import { IntOptions } from './types/number';
import { AgeOptions, FullNameOptions, GenderOptions, NameOptions, SexType } from './types/person';

const ldt = {
  card: new CardFactory(),
  color: new ColorFactory(),
  id: new IdFactory(),
  location: new LocationFactory(),
  number: new NumberFactory(),
  person: new PersonFactory(),
  product: new ProductFactory(),
  string: new StringFactory(),
  utils: new UtilsFactory(),
};

export { ldt };
export default ldt;
export type {
  AgeOptions, FullNameOptions, GenderOptions, IntOptions,  NameOptions, SexType,
};