import { OrString } from "@soperio/utils";
import { AnyAngle } from "./CSS/Filters";
import { ThemingToken } from "./ThemingToken";

type AnyCSSSizeValue = "any valid css sizing value like 23px, 2rem, 14pt, etc..."

export type BorderRadius = OrString<ThemingToken<"borders", "radius"> | SpacingPositive | AnyCSSSizeValue>
export type BorderWidth = OrString<ThemingToken<"borders", "width"> | SpacingPositive | AnyCSSSizeValue>

export type Breakpoints = keyof ThemingToken<"breakpoints">

type RootColors = { [Property in keyof ThemingToken<"rootColors"> as `--${string & Property}`]: ThemingToken<"rootColors"> };

export type Color = OrString<keyof ThemingToken<"colors"> | keyof RootColors | "Color value like blue, #ff00cc, rgb(0, 253, 255), etc...">

export type BoxShadow = OrString<ThemingToken<"effects", "boxShadow">>

export type Flex = OrString<ThemingToken<"flexbox", "flex">>
export type GridAutoColumns = OrString<ThemingToken<"flexbox", "gridAutoColumns">>
export type GridAutoRows = OrString<ThemingToken<"flexbox", "gridAutoRows">>
export type GridColumnSpan = OrString<ThemingToken<"flexbox", "gridColumnSpan">>
export type GridRowSpan = OrString<ThemingToken<"flexbox", "gridRowSpan">>
export type GridTemplateColumns = OrString<ThemingToken<"flexbox", "gridTemplateColumns">>
export type GridTemplateRows = OrString<ThemingToken<"flexbox", "gridTemplateRows">>
export type Order = OrString<ThemingToken<"flexbox", "order">>

export type Opacity = OrString<ThemingToken<"opacity">> | number

export type Height = OrString<ThemingToken<"sizing", "height"> | AnyCSSSizeValue>
export type MinHeight = OrString<ThemingToken<"sizing", "minHeight"> | AnyCSSSizeValue>
export type MinWidth = OrString<ThemingToken<"sizing", "minWidth"> | AnyCSSSizeValue>
export type MaxHeight = OrString<ThemingToken<"sizing", "maxHeight"> | AnyCSSSizeValue>
export type MaxWidth = OrString<ThemingToken<"sizing", "maxWidth"> | AnyCSSSizeValue>
export type Width = OrString<ThemingToken<"sizing", "width"> | AnyCSSSizeValue>

export type Spacing = OrString<ThemingToken<"spacing", "positiveNegative"> | AnyCSSSizeValue>
export type SpacingPositive = OrString<ThemingToken<"spacing", "positive"> | AnyCSSSizeValue>

export type Scale = OrString<ThemingToken<"transform", "scale"> | AnyCSSSizeValue>
export type Rotate = OrString<ThemingToken<"transform", "rotate">> | AnyAngle
export type Translate = OrString<ThemingToken<"transform", "translate"> | AnyCSSSizeValue>
export type Skew = OrString<ThemingToken<"transform", "skew">>

export type Ease = OrString<ThemingToken<"transition", "ease">>
export type Duration = OrString<ThemingToken<"transition", "duration">>
export type Delay = OrString<ThemingToken<"transition", "delay">>
export type Animation = OrString<ThemingToken<"transition", "animation">>
export type TransitionProperty = OrString<ThemingToken<"transition", "transitionProperty">>

export type Font = OrString<ThemingToken<"typography", "font">>
export type FontSize = OrString<ThemingToken<"typography", "fontSize"> | AnyCSSSizeValue>
export type LetterSpacing = OrString<ThemingToken<"typography", "letterSpacing">>
export type LineHeight = OrString<ThemingToken<"typography", "lineHeight">>
export type TextShadow = OrString<ThemingToken<"typography", "textShadow">>
export type TextShadowBlur = OrString<ThemingToken<"typography", "textShadowBlur">>

export type Blur = OrString<ThemingToken<"filters", "blur"> | AnyCSSSizeValue>
export type Brightness = OrString<ThemingToken<"filters", "brightness">>
export type Contrast = OrString<ThemingToken<"filters", "contrast">>
export type DropShadow = OrString<ThemingToken<"filters", "dropShadow">>
export type GrayScale = OrString<ThemingToken<"filters", "grayscale">>
export type HueRotate = OrString<ThemingToken<"filters", "hueRotate">>
export type Invert = OrString<ThemingToken<"filters", "invert">>
export type Saturate = OrString<ThemingToken<"filters", "saturate">>
export type Sepia = OrString<ThemingToken<"filters", "sepia">>
export type BackdropBlur = OrString<ThemingToken<"filters", "blur"> | AnyCSSSizeValue>
export type BackdropBrightness = OrString<ThemingToken<"filters", "brightness">>
export type BackdropContrast = OrString<ThemingToken<"filters", "contrast">>
export type BackdropGrayScale = OrString<ThemingToken<"filters", "grayscale">>
export type BackdropHueRotate = OrString<ThemingToken<"filters", "hueRotate">>
export type BackdropInvert = OrString<ThemingToken<"filters", "invert">>
export type BackdropOpacity = OrString<ThemingToken<"opacity">>
export type BackdropSaturate = OrString<ThemingToken<"filters", "saturate">>
export type BackdropSepia = OrString<ThemingToken<"filters", "sepia">>
