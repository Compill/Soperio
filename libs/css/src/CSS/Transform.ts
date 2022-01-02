import { Rotate, Scale, Skew, Spacing, Translate } from "@soperio/theming";


export interface Transform
{
  transform?: false | true | "gpu" | "none",
  transformOrigin?: false | "center" | "top" | "top-end" | "end" | "bottom-end" | "bottom" | "bottom-start" | "start" | "top-start",
  scale?: false | Scale | number,
    scaleX?: false | Scale | number,
    scaleY?: false | Scale | number,
    rotate?: false | Rotate;
    translateX?: false | Spacing | Translate,
    translateY?: false | Spacing | Translate,
    skewX?: false | Skew;
    skewY?: false | Skew;
}
