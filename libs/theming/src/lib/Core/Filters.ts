import { Opacity, SpacingPositive } from "../CSSTypes";

export default interface ThemeFilters
{
  blur: SpacingPositive | "none" | "sm" | "md" | "default" | "lg" | "xl" | "x2" | "x3",
  brightness: "0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200",
  contrast: "0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200",
  dropShadow: "sm" | "default" | "md" | "lg" | "xl" | "none",
  grayscale: "0" | "default",
  hueRotate: "0" | "15" | "30" | "60" | "90" | "180",
  invert: "0" | "default",
  saturate: "0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200",
  sepia: "0" | "default",
  backdropBlur: SpacingPositive | "none" | "sm" | "md" | "default" | "lg" | "xl" | "x2" | "x3",
  backdropBrightness: "0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200",
  backdropContrast: "0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200",
  backdropGrayscale: "0" | "default",
  backdropHueRotate: "0" | "15" | "30" | "60" | "90" | "180",
  backdropInvert: "0" | "default",
  backdropOpacity: Opacity,
  backdropSaturate: "0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200",
  backdropSepia: "0" | "default",
}
