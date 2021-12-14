import { ColorTheme } from "./ColorTheme";

type KeyValueObject<T> = Record<string, T>;
type StringKeyValueObject = KeyValueObject<string>;

export interface Theme
{
  breakpoints: StringKeyValueObject,
  border: { radius: StringKeyValueObject, width: StringKeyValueObject; },
  themes: { default: ColorTheme, [k: string]: ColorTheme; },
  rootColors: StringKeyValueObject,
  colors: StringKeyValueObject,
  effects: { boxShadow: StringKeyValueObject; },
  flexbox: {
    flex: StringKeyValueObject,
    gridAutoColumns: StringKeyValueObject,
    gridAutoRows: StringKeyValueObject,
    gridColumn: StringKeyValueObject,
    gridRow: StringKeyValueObject,
    gridTemplateColumns: StringKeyValueObject,
    gridTemplateRows: StringKeyValueObject,
    order: StringKeyValueObject,
  },
  interactivity: { outline: KeyValueObject<string[]>; },
  opacity: KeyValueObject<number>,
  sizing: {
    height: StringKeyValueObject,
    minHeight: StringKeyValueObject,
    maxHeight: StringKeyValueObject,
    width: StringKeyValueObject,
    minWidth: StringKeyValueObject,
    maxWidth: StringKeyValueObject,
  },
  spacing: { positive: StringKeyValueObject, positiveNegative: StringKeyValueObject; };
  transform: {
    scale: StringKeyValueObject,
    rotate: StringKeyValueObject,
    translate: StringKeyValueObject,
    skew: StringKeyValueObject,
  },
  transition: {
    ease: StringKeyValueObject,
    duration: StringKeyValueObject,
    delay: StringKeyValueObject,
    animation: StringKeyValueObject,
    // keyframes: StringKeyValueObject,
    transitionProperty: StringKeyValueObject,
  },
  typography: {
    fontSize: KeyValueObject<string[]>,
    letterSpacing: StringKeyValueObject,
    lineHeight: StringKeyValueObject,
  };
};
