import { SpacingPositive } from "@soperio/theming";
import { OrString } from "@soperio/utils";

export interface Filters
{
  blur?: true | false | SpacingPositive | OrString<"sm" | "md" | "lg" |"xl" | "2x" | "3x">,
  brightness?: false | number | OrString<"0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200" | "any percentage between 0 and 200 (25%, 0.4, 175%, ...)">,
  constrast?: false | number | OrString<"0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200" | "any percentage between 0 and 200 (25%, 0.4, 175%, ...)">,
  dropShadow?: true | false | "sm" | "md" | "lg" |"xl" | "2x",
  grayscale?: true | false | number | OrString<"any percentage between 0 and 100 (25%, 0.4, ...)">,
  hueRotate?: false | number | OrString<"0" | "15" | "30" | "60" | "90" | "180" | "any angle value (125deg, 3.124rad, -0.25turn, ...)">,
  invert?: true | false | number | OrString<"any percentage between 0 and 100 (25%, 0.4, ...)">,
  saturate?: true | false | number | OrString<"0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200" | "any percentage between 0 and 200 (25%, 0.4, 175%, ...)">,
  sepia?: true | false | number | OrString<"any percentage between 0 and 100 (25%, 0.4, ...)">,

  backdropBlur?: true | false | SpacingPositive | OrString<"sm" | "md" | "lg" | "xl" | "2x" | "3x">,
  backdropBrightness?: true | false | number | OrString<"0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200" | "any percentage between 0 and 200 (25%, 0.4, 175%, ...)">,
  backdropConstrast?: true | false | number | OrString<"0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200" | "any percentage between 0 and 200 (25%, 0.4, 175%, ...)">,
  backdropDropShadow?: true | false | "sm" | "md" | "lg" | "xl" | "2x",
  backdropGrayscale?: true | false | number | OrString<"any percentage between 0 and 100 (25%, 0.4, ...)">,
  backdropHueRotate?: false | number | OrString<"0" | "15" | "30" | "60" | "90" | "180" | "any angle value (125deg, 3.124rad, -0.25turn, ...)">,
  backdropInvert?: true | false | number | OrString<"any percentage between 0 and 100 (25%, 0.4, ...)">,
  backdropSaturate?: true | false | number | OrString<"0" | "25" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200" | "any percentage between 0 and 200 (25%, 0.4, 175%, ...)">,
  backdropSepia?: true | false | number | OrString<"any percentage between 0 and 100 (25%, 0.4, ...)">,
}
