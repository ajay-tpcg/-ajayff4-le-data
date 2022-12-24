import { CARDS, COIN, DICE, ERRORS } from "../../constants";
import GameFactory from "../factory.game";

describe('it tests the game module', () => {
  let factory: GameFactory;
  beforeAll(() => {
    factory = new GameFactory();
  });

  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });


  it('returns coin toss outcome as "heads" or "tails"', () => {
    expect(COIN.includes(factory.toss())).toBe(true);
  });


  it('returns dice roll outcome as 1, 2, 3, 4, 5, or 6', () => {
    expect(DICE.includes(factory.dice())).toBe(true);
  });

  it('returns 2 dice rolls outcome as [1, 2], [3, 4] and so on', () => {
    const res = factory.dice2();
    res.forEach(dice => {
      expect(DICE.includes(dice)).toBe(true);
    });
  });

  it('returns 3 dice rolls outcome as [1, 2, 3], [3, 4, 5] and so on', () => {
    const res = factory.dice3();
    res.forEach(dice => {
      expect(DICE.includes(dice)).toBe(true);
    });
  });


  it('returns a card from deck as "Ace of Spades", or "5 of Hearts" and so on', () => {
    const card = factory.card();
    if (card) {
      const [name, type] = card.split(" of ");
      expect(CARDS.NAMES.includes(name)).toBe(true);
      expect(CARDS.TYPES.includes(type)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns a card from deck as "Ace of ♣️", or "5 of ♥️" and so on', () => {
    const card = factory.card({symbol:true});
    if (card) {
      const [name, symbol] = card.split(" of ");
      expect(CARDS.NAMES.includes(name)).toBe(true);
      expect(CARDS.SYMBOLS.includes(symbol)).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is of incorrect type for card() method', () => {
    const fun = () => {
      return factory.card({symbol: "true" as any});
    };
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns 2 cards from deck as ["Ace of Spades","5 of Hearts"] and so on', () => {
    const cards = factory.card2();
    if (cards) {
      expect(cards).toHaveLength(2);
      cards.forEach(card => {
        const [name, type] = card.split(" of ");
        expect(CARDS.NAMES.includes(name)).toBe(true);
        expect(CARDS.TYPES.includes(type)).toBe(true);
      })
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns 2 cards from deck as ["Ace of ♣️","5 of ♥️"] and so on', () => {
    const cards = factory.card2({symbol:true});
    if (cards) {
      expect(cards).toHaveLength(2);
      cards.forEach(card => {
        const [name, type] = card.split(" of ");
        expect(CARDS.NAMES.includes(name)).toBe(true);
        expect(CARDS.SYMBOLS.includes(type)).toBe(true);
      })
    } else {
      expect(true).toBe(false);
    }
  });


  it('throws error if parameter is of incorrect type for card2() method', () => {
    const fun = () => {
      return factory.card2({symbol: "true" as any});
    };
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns 3 cards from deck as ["Ace of Spades","5 of Hearts","8 of Clubs"] and so on', () => {
    const cards = factory.card3();
    if (cards) {
      expect(cards).toHaveLength(3);
      cards.forEach(card => {
        const [name, type] = card.split(" of ");
        expect(CARDS.NAMES.includes(name)).toBe(true);
        expect(CARDS.TYPES.includes(type)).toBe(true);
      });
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns 3 cards from deck as ["Ace of ♣️","5 of ♥️","8 of ♠️"] and so on', () => {
    const cards = factory.card3({symbol:true});
    if (cards) {
      expect(cards).toHaveLength(3);
      cards.forEach(card => {
        const [name, type] = card.split(" of ");
        expect(CARDS.NAMES.includes(name)).toBe(true);
        expect(CARDS.SYMBOLS.includes(type)).toBe(true);
      });
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is of incorrect type for card3() method', () => {
    const fun = () => {
      return factory.card3({symbol: "true" as any});
    };
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });

})