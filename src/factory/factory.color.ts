import { z } from "zod";
import { colors, spaces } from "../collections/Colors";
import { hexSet } from "../collections/Number";
import { ERRORS } from "../constants";
import { HslOptions, RgbOptions } from "../types/color";
import utils from "../utils";

//returns random colors in hex, rgb, rgba, other formats
class ColorFactory {
  human():string {
    return utils.getRandomValue(colors);
  }

  rgb(options?:RgbOptions) {
    const _options = {
      alpha: options?.alpha ?? false,
      decimal: options?.decimal ?? false,
    };

    const schema = z.object({
      alpha: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
      decimal: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    }).optional();

    const res = schema.safeParse(_options);
    if (res.success) {
      if (_options.decimal) {
        const r = utils.getNumberBetween(0,255);
        const g = utils.getNumberBetween(0,255);
        const b = utils.getNumberBetween(0,255);
        const a = utils.getNumberBetween(0,255);
        return _options.alpha ? [r,g,b,a] : [r,g,b];
      } else {
        let str = '#';
        const len = _options.alpha ? 8 : 6;
        for (let i=0; i<len; i++) {
          str = str.concat(utils.getRandomValue(hexSet));
        }
        return str;
      }
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  // HSL(Hue, Saturation, and Lightness)
  // h -> 0-120 is red, 121-240 is green, 241-359 is blue
  // h:int, s:percenatage,l:percentage,a:decimal
  hsl(options?:HslOptions) {
    const _options = {
      alpha: options?.alpha ?? false,
    };

    const schema = z.object({
      alpha: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    }).optional();

    const res = schema.safeParse(_options);
    if (res.success) {
      const h = utils.getNumberBetween(0,359);
      const s = utils.getNumberBetween(0,100,2);
      const l = utils.getNumberBetween(0,100,2);
      const a = utils.getNumberBetween(0,100,2);
      return _options.alpha ? [h,s,l,a] : [h,s,l];
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  // CMYK stands for "cyan, magenta, yellow, and key (black). 
  // It is not directly supported in HTML
  // C%, M%, Y%, K%
  cmyk() {
    const c = utils.getNumberBetween(0,100,2);
    const m = utils.getNumberBetween(0,100,2);
    const y = utils.getNumberBetween(0,100,2);
    const k = utils.getNumberBetween(0,100,2);
    return [c,m,y,k];
  }

  // Hue, White%, Black%
  hwb() {
    const h = utils.getNumberBetween(0,359);
    const w = utils.getNumberBetween(0,100,2);
    const b = utils.getNumberBetween(0,100,2);
    return [h,w,b];
  }

  // Lightness, A is color range from green to red, B is for blue to yellow
  lab() {
    const l = utils.getNumberBetween(0,100);
    const a = utils.getNumberBetween(-128,127);
    const b = utils.getNumberBetween(-128,127);
    return [l,a,b];
  }

  // Lightness, Chroma(Saturation), Hue
  lch() {
    const [L,a,b] = this.lab();
    const C = parseFloat(Math.sqrt(a^2 + b^2).toFixed(2));
    const H = parseFloat((Math.atan2(b, a) * 180 / Math.PI).toFixed(2));
    return [L,C,H];
  }

  space() {
    return utils.getRandomValue(spaces);
  }
}

export default ColorFactory;