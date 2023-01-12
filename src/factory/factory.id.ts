import crypto from 'crypto';
import UtilsFactory from './factory.utils';

class IdFactory {
  // requires nodeJS of version 15.6.0 or above
  uuid() {
    return crypto.randomUUID();
  }

  nanoid() {
    const utilsFactory = new UtilsFactory();
    return utilsFactory.seed(21,{addons:'_-'});
  }
}

export default IdFactory;