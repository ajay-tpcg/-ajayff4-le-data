import CardFactory from './factory/factory.card';
import ColorFactory from './factory/factory.color';
import GameFactory from './factory/factory.game';
import IdFactory from './factory/factory.id';
import LocationFactory from './factory/factory.location';
import NumberFactory from './factory/factory.number';
import PersonFactory from './factory/factory.person';
import ProductFactory from './factory/factory.product';
import StringFactory from './factory/factory.string';
import UtilsFactory from './factory/factory.utils';
import { IntOptions } from './types/number';
import { AgeOptions, FullNameOptions, GenderOptions, NameOptions, SexType } from './types/person';
import { CardOptions } from './types/game';
import { SeedOptions } from './types/utils';

const ldt = {
  card: new CardFactory(),
  color: new ColorFactory(),
  id: new IdFactory(),
  location: new LocationFactory(),
  number: new NumberFactory(),
  person: new PersonFactory(),
  product: new ProductFactory(),
  string: new StringFactory(),
  game: new GameFactory(),
  utils: new UtilsFactory(),
};

export default ldt;
export { ldt };
export type {
  AgeOptions, FullNameOptions, GenderOptions, IntOptions,  NameOptions, SexType, SeedOptions, 
  CardOptions,
};