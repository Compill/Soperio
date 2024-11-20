import { Rotate, Scale, Skew, Spacing, Translate } from "../CSSTypes";


export interface Transform
{
  transform?: false | true | "gpu" | "none",
  transformOrigin?: false | "center" | "top" | "top-end" | "end" | "bottom-end" | "bottom" | "bottom-start" | "start" | "top-start",
  scale?: false | Scale | number,
  scaleX?: false | Scale | number,
  scaleY?: false | Scale | number,
  scaleZ?: false | Scale | number,
  rotate?: false | Rotate | number;
  rotateX?: false | Rotate | number;
  rotateY?: false | Rotate | number;
  rotateZ?: false | Rotate | number;
  translateX?: false | Spacing | Translate | number,
  translateY?: false | Spacing | Translate | number,
  translateZ?: false | Spacing | Translate | number,
  skewX?: false | Skew | number;
  skewY?: false | Skew | number;
}
