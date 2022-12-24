import { z } from "zod";
import { CARDS, COIN, DICE, ERRORS } from "../constants";
import { CardOptions } from "../types/game";
import utils from "../utils";

// returns dice roll, coin toss, random cards and so on
class GameFactory {
  toss():string {
    return utils.getRandomValue(COIN);
  }

  dice():number {
    return utils.getRandomValue(DICE);
  }

  dice2():Array<number> {
    return [this.dice(), this.dice()];
  }

  dice3():Array<number> {
    return [this.dice(), this.dice(), this.dice()];
  }

  card(options?:CardOptions) {
    const _options = {
      symbol: options?.symbol ?? false,
    };
    const schema = z.object({
      symbol: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    }).optional();

    const res = schema.safeParse(_options);

    if (res.success) {
      if (_options.symbol) {
        return `${utils.getRandomValue(CARDS.NAMES)} of ${utils.getRandomValue(CARDS.SYMBOLS)}`;
      } else {
        return `${utils.getRandomValue(CARDS.NAMES)} of ${utils.getRandomValue(CARDS.TYPES)}`;
      }
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  card2(options?:CardOptions):Array<string>|undefined {
    const _options = {
      symbol: options?.symbol ?? false,
    };

    const schema = z.object({
      symbol: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    }).optional();

    const res = schema.safeParse(_options);

    if(res.success) {
      const card1 = this.card(_options);
      const card2 = this.card(_options);
      if (card1 && card2 && (new Set([card1,card2]).size === 2)) {
        return [card1,card2];
      } else {
        return this.card2(_options);
      }
    } else {
      utils.throwErrors(res.error.issues);
    }
  }

  card3(options?:CardOptions):Array<string>|undefined {
    const _options = {
      symbol: options?.symbol ?? false,
    };

    const schema = z.object({
      symbol: z.boolean({invalid_type_error:ERRORS.TYPE_ERROR}).optional(),
    }).optional();

    const res = schema.safeParse(_options);
    
    if(res.success) {
      const card1 = this.card(_options);
      const card2 = this.card(_options);
      const card3 = this.card(_options);
      
      if (card1 && card2 && card3 && (new Set([card1,card2,card3]).size === 3)) {
        return [card1,card2,card3];
      }
      else {
        return this.card3(_options);
      }
    } else {
      utils.throwErrors(res.error.issues);
    }
  }
}

export default GameFactory;