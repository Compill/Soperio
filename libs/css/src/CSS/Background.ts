import { Color, Opacity } from "@soperio/theming";
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
  bgPosition?: false | "bottom" | "center" | "start" | "start-top" | "start-bottom" | "end" | "end-top" | "end-bottom" | "top";
  bgRepeat?: true | false | "x" | "y" | "round" | "space" | "no-repeat",
  bgSize?: false | "auto" | "cover" | "contain",
  // bgGradient?: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl",
  // from?: string,
  // via?: string,
  // to?: string,
}
