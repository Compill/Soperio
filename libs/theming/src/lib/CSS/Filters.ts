import { BackdropBlur, BackdropBrightness, BackdropContrast, BackdropGrayScale, BackdropHueRotate, BackdropInvert, BackdropOpacity, BackdropSaturate, BackdropSepia, Blur, Brightness, Contrast, DropShadow, GrayScale, HueRotate, Invert, Saturate, Sepia } from "../CSSTypes";

type AnyPercentage = "any percentage between 0 and 200 (25%, 0.4, 175%, ...)"
export type AnyAngle = "any angle value(125deg, 3.124rad, -0.25turn, ...)"

export interface Filters
{
  blur?: true | false | Blur,
  brightness?: false | number | Brightness | AnyPercentage,
  contrast?: false | number | Contrast | AnyPercentage,
  dropShadow?: true | false | DropShadow,
  grayscale?: true | false | number | GrayScale | AnyPercentage,
  hueRotate?: false | number | HueRotate | AnyAngle,
  invert?: true | false | number | Invert | AnyPercentage,
  saturate?: true | false | number | Saturate | AnyPercentage,
  sepia?: true | false | number | Sepia | AnyPercentage,

  backdropBlur?: true | false | BackdropBlur,
  backdropBrightness?: true | false | number | BackdropBrightness | AnyPercentage,
  backdropContrast?: true | false | number | BackdropContrast | AnyPercentage,
  backdropGrayscale?: true | false | number | BackdropGrayScale | AnyPercentage,
  backdropHueRotate?: false | number | BackdropHueRotate | AnyAngle,
  backdropInvert?: true | false | number | BackdropInvert | AnyPercentage,
  backdropOpacity?: true | false | number | BackdropOpacity,
  backdropSaturate?: true | false | number | BackdropSaturate | AnyPercentage,
  backdropSepia?: true | false | number | BackdropSepia | AnyPercentage,
}
