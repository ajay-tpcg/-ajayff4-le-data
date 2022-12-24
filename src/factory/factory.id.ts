import crypto from 'crypto';
import UtilsFactory from './factory.utils';

class IdFactory {
  uuid() {
    return crypto.randomUUID();
  }

  nanoid() {
    const utilsFactory = new UtilsFactory();
    return utilsFactory.seed(21,{addons:'_-'});
  }
}

export default IdFactory;