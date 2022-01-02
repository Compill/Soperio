import { OrString } from "@soperio/utils";
import { ThemingToken } from "./ThemingToken";

type AnyCSSSizeValue = "any valid css sizing value like 23px, 2rem, 14pt, etc..."

export type BorderRadius = OrString<ThemingToken<"borders", "radius"> | AnyCSSSizeValue>
export type BorderWidth = OrString<ThemingToken<"borders", "width"> | AnyCSSSizeValue>

export type Breakpoints = keyof ThemingToken<"breakpoints">
export type ColorThemes = ThemingToken<"colorThemes">

type RootColors = { [Property in keyof ThemingToken<"rootColors"> as `root.${string & Property}`]: ThemingToken<"rootColors"> };

export type Color = OrString<keyof ThemingToken<"colors"> | keyof RootColors | "Color value like blue, #ff00cc, rgb(0, 253, 255), etc...">

export type BoxShadow = OrString<ThemingToken<"effects", "boxShadow">>

export type Flex = OrString<ThemingToken<"flexbox", "flex">>
export type GridAutoColumns = OrString<ThemingToken<"flexbox", "gridAutoColumns">>
export type GridAutoRows = OrString<ThemingToken<"flexbox", "gridAutoRows">>
export type GridColumn = OrString<ThemingToken<"flexbox", "gridColumn">>
export type GridRow = OrString<ThemingToken<"flexbox", "gridRow">>
export type GridTemplateColumns = OrString<ThemingToken<"flexbox", "gridTemplateColumns">>
export type GridTemplateRows = OrString<ThemingToken<"flexbox", "gridTemplateRows">>
export type Order = OrString<ThemingToken<"flexbox", "order">>

export type Outline = OrString<ThemingToken<"interactivity", "outline">>

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
export type Rotate = OrString<ThemingToken<"transform", "rotate">>
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
