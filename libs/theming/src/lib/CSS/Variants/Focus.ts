import { Background } from "../Background";
import { Border } from "../Border";
import { Effects } from "../Effects";
import { Layout } from "../Layout";
import { Typography } from "../Typography";

export interface Focus extends
  Pick<Background, "bgColor" | "bgOpacity">,
  Pick<Border, "border" | "borderB" | "borderE" | "borderS" | "borderT" | "borderColor" | "borderBColor" | "borderEColor" | "borderSColor" | "borderTColor" | "borderOpacity" | "outline" | "outlineColor" | "outlineOpacity" | "outlineOffset" | "ring" | "ringColor" | "ringInset" | "ringOffset" | "ringOffsetColor">,
  Pick<Effects, "opacity" | "shadow" | "shadowColor">,
  Pick<Layout, "bottom" | "end" | "start" | "top">,
  Pick<Typography, "fontWeight" | "placeholderColor" | "placeholderOpacity" | "textAlign" | "textColor" | "textDecoration" | "textOpacity">
{

}
