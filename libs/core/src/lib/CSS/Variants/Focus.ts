// import { Accessibility, AccessibilityMapping } from "../Utilities/Accessibility";
// import { SpacingScale } from "../Utilities/Spacing";
// import { ScalingScale } from "../Utilities/Transform";
import { Opacity } from "../../PropTypes/Opacity";
import { Breakpoints } from "../../Breakpoints";

export interface Focus/* extends Accessibility*/
{
    bgColor?: string,
    bgOpacity?: Opacity,
    borderColor?: string,
    borderOpacity?: Opacity,
    // shadow?: true | false | "sm" | Breakpoints | "inner" | "none",
    // from?: string,
    // via?: string,
    // to?: string,
    // opacity?:Opacity,
    // outline?: "none" | "white" | "black",
    // placeholderColor?: string,
    // placeholderOpacity?: Opacity,
    // ringColor?: string,
    // ringOffset?: "0" | "1" | "2" | "4" | "8",
    // ringOffsetColor?: string;
    // ringOpacity?: Opacity,
    // ringWidth?: true | false | "0" | "1" | "2" | "4" | "8" | "inset",
    // rotate?: "0" | "1" | "2" | "2" | "6" | "12" | "45" | "90" | "180";
    // scale?: ScalingScale,
    // scaleX?: ScalingScale,
    // scaleY?: ScalingScale,
    // skewX?: "0" | "1" | "2" | "2" | "6" | "12",
    // skewY?: "0" | "1" | "2" | "2" | "6" | "12",
    // textColor?: string,
    // textDecoration?: "underline" | "line-through" | "no-underline",
    // textOpacity?: Opacity,
    // translateX?: SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full",
    // translateY?: SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full",
    // z?: "0" | "10" | "20" | "30" | "40" | "50" | "auto"
}

export const FocusMapping = 
{
    // ...AccessibilityMapping,
    bgColor: "bg",
    bgOpacity: "bg-opacity",
    borderColor: "border",
    borderOpacity: "border-opacity",
    shadow: "shadow",
    from: "from",
    via: "via",
    to: "to",
    opacity: "opacity",
    outline: "outline",
    placeholderColor: "placeholder",
    placeholderOpacity: "placeholder-opacity",
    ringColor: "ring",
    ringOffset: "ring-offset",
    ringOffsetColor: "ring-offset",
    ringOpacity: "ring-opacity",
    ringWidth: "ring",
    rotate: "rotate",
    rotateN: "-rotate",
    scale: "scale",
    scaleX: "scale-x",
    scaleY: "scale-y",
    skewX: "skew-x",
    skewXN: "-skew-x",
    skewY: "skew-y",
    skewYN: "-skew-y",
    textColor: "text",
    textDecoration: "",
    textOpacity: "text-opacity",
    translateX: "translate-x",
    translateXN: "-translate-x",
    translateY: "translate-y",
    translateYN: "-translate-y",
    z: "z",
}