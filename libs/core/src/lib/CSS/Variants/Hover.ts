// import { SpacingScale } from "../Utilities/Spacing";
// import { ScalingScale } from "../Utilities/Transform";
import { Breakpoints } from "../../Breakpoints";
import { Color } from "../../PropTypes/Color";
import { Opacity } from "../../PropTypes/Opacity";

export interface Hover 
{
    bgColor?: Color,
    bgOpacity?: Opacity,
    borderColor?: Color,
    borderOpacity?: Opacity,
    shadow?: true | false | "sm" | Breakpoints | "inner" | "none",
    // from?: string,
    // via?: string,
    // to?: string,
    // opacity?: Opacity,
    // rotate?: "0" | "1" | "2" | "2" | "6" | "12" | "45" | "90" | "180";
    // scale?: ScalingScale,
    // scaleX?: ScalingScale,
    // scaleY?: ScalingScale,
    // skewX?: "0" | "1" | "2" | "2" | "6" | "12",
    // skewY?: "0" | "1" | "2" | "2" | "6" | "12",
    textColor?: Color,
    textDecoration?: "underline" | "line-through" | "no-underline",
    // textOpacity?: Opacity,
    // translateX?: SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full",
    // translateY?: SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full",
}

export const HoverMapping =
{
    bgColor: "bg",
    bgOpacity: "bg-opacity",
    borderColor: "border",
    borderOpacity: "border-opacity",
    shadow: "shadow",
    from: "from",
    via: "via",
    to: "to",
    opacity: "opacity",
    rotate: "rotate",
    rotateN: "-rotate",
    scale: "scale",
    scaleX: "scale-x",
    scaleY: "scale-y",
    skewX: "skew-x",
    skewXN: "-skew-x",
    skewY: "skew-y",
    skewYN: "-skew-y",
    translateX: "translate-x",
    translateXN: "-translate-x",
    translateY: "translate-y",
    translateYN: "-translate-y",
    textColor: "text",
    textDecoration: "",
    textOpacity: "text-opacity"
};