import utils from "../utils";

// utility methods for help such as slug
class UtilsFactory {

  slug(text:string) {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }

  seed(length?:number) {
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    let seed = Array<string>();
    for(let i = 0; i < (length ?? 10); i++) {
      seed += utils.getRandomValue(str);
    }
    return seed;
  }
}

export default UtilsFactory;