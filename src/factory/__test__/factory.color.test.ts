import { colors, spaces } from "../../collections/Colors";
import { ERRORS } from "../../constants";
import ColorFactory from "../factory.color";

describe('it tests the color module', () => {
  let factory: ColorFactory;
  beforeAll(() => {
    factory = new ColorFactory();
  });

  it('returns true if factory is initialized', () => {
    expect(factory).toBeTruthy();
  });


  it('returns a simple human readale color', () => {
    const color = factory.human();
    expect(colors.includes(color)).toBe(true);
  });


  it('returns an RGB color in hex format', () => {
    const color = factory.rgb();
    expect(color).toContain('#');
    expect(color).toHaveLength(7);
  });

  it('returns an RGB color in hex format with alpha', () => {
    const color = factory.rgb({alpha:true});
    expect(color).toContain('#');
    expect(color).toHaveLength(9);
  });

  it('returns an RGB color in array format', () => {
    const color = factory.rgb({decimal:true}) as Array<number>;
    expect(color).toHaveLength(3);
    color.forEach((component:number) => {
      expect(component).toBeGreaterThanOrEqual(0);
      expect(component).toBeLessThanOrEqual(255);
    });
  });

  it('returns an RGB color in array format with alpha', () => {
    const color = factory.rgb({decimal:true, alpha:true}) as Array<number>;
    expect(color).toHaveLength(4);
    const [r,g,b,a] = color;
    [r,g,b].forEach((component:number) => {
      expect(component).toBeGreaterThanOrEqual(0);
      expect(component).toBeLessThanOrEqual(255);
    });
    expect(a).toBeGreaterThanOrEqual(0);
    expect(a).toBeLessThanOrEqual(1);
  });

  it('throws error if parameter is of incorrect type for rgb() method', () => {
    const fun = () => {
      return factory.rgb({alpha: "true" as any});
    };
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns an HSL color in array format', () => {
    const color = factory.hsl();
    if (color) {
      expect(color).toHaveLength(3);
      const [h,s,l] = color;
      expect(h).toBeGreaterThanOrEqual(0);
      expect(h).toBeLessThanOrEqual(359);
      [s,l].forEach(component => {
        expect(component).toBeGreaterThanOrEqual(0);
        expect(component).toBeLessThanOrEqual(100);
      });
    } else {
      expect(true).toBe(false);
    }
  });

  it('returns an HSL color in array format with alpha', () => {
    const color = factory.hsl({alpha:true});
    if (color) {
      expect(color).toHaveLength(4);
      const [h,s,l,a] = color;
      expect(h).toBeGreaterThanOrEqual(0);
      expect(h).toBeLessThanOrEqual(359);
      [s,l].forEach(component => {
        expect(component).toBeGreaterThanOrEqual(0);
        expect(component).toBeLessThanOrEqual(100);
      });
      expect(a).toBeGreaterThanOrEqual(0);
      expect(a).toBeLessThanOrEqual(1);
    } else {
      expect(true).toBe(false);
    }
  });

  it('throws error if parameter is of incorrect type for hsl() method', () => {
    const fun = () => {
      return factory.hsl({alpha: "true" as any});
    };
    expect(fun).toThrow(ERRORS.TYPE_ERROR);
  });


  it('returns an CMYK color in array format', () => {
    const color = factory.cmyk();
    expect(color).toHaveLength(4);
    color.forEach(component => {
      expect(component).toBeGreaterThanOrEqual(0);
      expect(component).toBeLessThanOrEqual(100);
    });
  });


  it('returns an HWB color in array format', () => {
    const color = factory.hwb();
    expect(color).toHaveLength(3);
    const [h,w,b] = color;
    expect(h).toBeGreaterThanOrEqual(0);
    expect(h).toBeLessThanOrEqual(359);
    [w,b].forEach(component => {
      expect(component).toBeGreaterThanOrEqual(0);
      expect(component).toBeLessThanOrEqual(100);
    });
  });


  it('returns an LAB color in array format', () => {
    const color = factory.lab();
    expect(color).toHaveLength(3);
    const [l,a,b] = color;
    expect(l).toBeGreaterThanOrEqual(0);
    expect(l).toBeLessThanOrEqual(100);
    [a,b].forEach(component => {
      expect(component).toBeGreaterThanOrEqual(-128);
      expect(component).toBeLessThanOrEqual(127);
    });
  });


  it('returns an LCH color in array format', () => {
    const color = factory.lch();
    expect(color).toHaveLength(3);
    color.forEach(component => {
      expect(component).toBeTruthy();
    });
  });


  it('returns a color space name', () => {
    const colorSpace = factory.space();
    expect(spaces.includes(colorSpace));
  });
});