export type RgbOptions = {
  alpha?: boolean;
  decimal?: boolean;
}

export type HslOptions = Pick<RgbOptions,'alpha'>;