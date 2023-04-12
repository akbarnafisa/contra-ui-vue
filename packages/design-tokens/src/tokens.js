export const NAMESPACE_PREFIX = 'c';
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'font';
export const TYPE_VARIANT = 'font-variant';
export const COLOR = 'color';
export const RADIUS = 'radius';

const tokens = {};

/* SPACING */

tokens[SPACING] = {
  DEFAULT: {
    0: 0,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    48: 48,
    64: 64,
  },
};

/* TYPOGRAPHY */
const family = {
  sans: 'Montserrat, sans-serif',
};

const size = {
  12: 12,
  15: 15,
  17: 17,
  21: 21,
  24: 24,
  27: 27,
  36: 36,
};

const weight = {
  medium: 500,
  bold: 700,
};

const lineHeight = {
  110: '110%',
  150: '150%',
};

tokens[TYPOGRAPHY] = {
  family,
  size,
  weight,
  lineHeight,
};

const defaultVariant = {
  family: family.sans,
  size: size['12'],
  weight: weight.medium,
  lineHeight: lineHeight['110'],
};

tokens[TYPE_VARIANT] = {
  body_12: {
    ...defaultVariant,
  },
  body_15: {
    ...defaultVariant,
    size: size['15'],
  },
  body_17: {
    ...defaultVariant,
    size: size['17'],
  },
  body_21: {
    ...defaultVariant,
    size: size['21'],
  },

  heading_12: {
    ...defaultVariant,
    size: size['12'],
    lineHeight: lineHeight['110'],
    weight: weight.bold,
  },
  heading_17: {
    ...defaultVariant,
    size: size['17'],
    lineHeight: lineHeight['110'],
    weight: weight.bold,
  },
  heading_21: {
    ...defaultVariant,
    size: size['21'],
    lineHeight: lineHeight['110'],
    weight: weight.bold,
  },

  heading_24: {
    ...defaultVariant,
    size: size['24'],
    lineHeight: lineHeight['110'],
    weight: weight.bold,
  },
  heading_27: {
    ...defaultVariant,
    size: size['27'],
    lineHeight: lineHeight['110'],
    weight: weight.bold,
  },
  heading_36: {
    ...defaultVariant,
    size: size['36'],
    lineHeight: lineHeight['110'],
    weight: weight.bold,
  },
};

/* COLOR */
const palette = {
  white: '#fff',
  black: '#000',
  blue01: '#E9E7FC',
  blue03: '#8094FF',
  blue05: '#1947E5',
  pink01: '#FFF3F8',
  pink03: '#FFC7DE',
  pink05: '#FF89BB',
  yellow01: '#FFF4CC',
  yellow03: '#FFD465',
  yellow05: '#FFBD12',
  green01: '#D6FCF7',
  green03: '#61E4C5',
  green05: '#00C6AE',
  red01: '#FFE8E8',
  red03: '#FF9692',
  red05: '#F95A2C',
  grey01: '#F4F5F7',
  grey03: '#EEEFF4',
  grey04: '#D9DBE1',
  grey06: '#969BAB',
  grey07: '#474A57',
  grey09: '#18191F',
};

tokens[COLOR] = {
  DEFAULT: {
    ...palette,
  },
  text: {
    primary: palette.black,
    secondary: palette.grey07,
    disabled: palette.grey04,
    success: palette.green05,
    error: palette.red05,
    inactive: palette.grey03,
  },
  background: {
    standard: palette.white,
    light: palette.grey01,
    disabled: palette.grey03,
    success: palette.green05,
    error: palette.red05,
  },
};

/* RADIUS */
tokens[RADIUS] = {
  DEFAULT: {
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    full: 9999,
  },
};

export default function () {
  // a copy to avoid any outputs accidentally mutating it
  return { ...tokens };
}
