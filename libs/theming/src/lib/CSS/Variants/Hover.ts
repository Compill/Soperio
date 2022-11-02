import { Background } from "../Background";
import { Border } from "../Border";
import { Effects } from "../Effects";
import { Layout } from "../Layout";
import { Transform } from "../Transform";
import { Transitions } from "../Transitions";
import { Typography } from "../Typography";

export interface Hover extends
  Pick<Background, "bgColor" | "bgOpacity">,
  Pick<Border, "border" | "borderB" | "borderE" | "borderS" | "borderT" | "borderColor" | "borderBColor" | "borderEColor" | "borderSColor" | "borderTColor" | "borderOpacity">,
  Pick<Effects, "opacity" | "shadow" | "shadowColor">,
  Pick<Layout, "bottom" | "end" | "start" | "top">,
  Transform,
  Transitions,
  Pick<Typography, "fontWeight" | "textAlign" | "textColor" | "textDecoration" | "textOpacity">
{

}

// TODO Add a way to add before and after elements
