import { Color, Opacity } from "../CSSTypes";
import { OrString } from "@soperio/utils";

export interface Background
{
  bgAtt?: false | "fixed" | "local" | "scroll",
  bgClip?: false | "border" | "padding" | "content" | "text",
  bgColor?: false | Color,
  /*
      Apply transparency to background color.
      Attention, this will not be applied if you have defined an RGBA
      color for background. Only applied for RGB background colors
   */
  bgOpacity?: false | Opacity,
  bgImage?: false | OrString<"none" | "url()">,
  bgOrigin?: false | "border" | "padding" | "content",
  bgPosition?: false | OrString<"bottom" | "center" | "start" | "start-top" | "start-bottom" | "end" | "end-top" | "end-bottom" | "top">;
  bgRepeat?: true | false | "x" | "y" | "round" | "space" | "no-repeat",
  bgSize?: false | OrString<"auto" | "cover" | "contain">,
  bgGradient?: true | false | "linear" | "radial" | 'conic',
  /**
   * Only for bgGradient="linear"
   */
  bgGradientDir?: OrString<"to top" | "to top right" | "to right" | "to bottom right" | "to bottom" | "to bottom left" | "to left" | "to top left" | "any valid angle value like 66deg, 0.25turn, ...">,
  bgGradientFrom?: false | Color | "any valid gradient value like #F985C3, green 40%, red 0 50%, ...",
  bgGradientVia?: false | Color | "any valid gradient value like #F985C3, green 40%, red 0 50%, ...",
  bgGradientTo?: false | Color | "any valid gradient value like #F985C3, green 40%, red 0 50%, ...",
}
