import { getDirection } from "../hooks/useDirection";
import { SpacingScale } from "./Spacing";
import { css, OrString, Style, StyleProps } from "./utils";

export type ScalingScale = "0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150";

export interface Transform
{
    transform?: true | "gpu" | "none",
    transformOrigin?: "center" | "top" | "top-end" | "end" | "bottom-end" | "bottom" | "bottom-start" | "start" | "top-start",
    scale?: OrString<ScalingScale> | number,
    scaleX?: OrString<ScalingScale> | number,
    scaleY?: OrString<ScalingScale> | number,
    rotate?: OrString<"0" | "1" | "2" | "2" | "6" | "12" | "45" | "90" | "180" | "-1" | "-2" | "-2" | "-6" | "-12" | "-45" | "-90" | "-180">;
    translateX?: OrString<SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "full">,
    translateY?: OrString<SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "full">,
    skewX?: OrString<"0" | "1" | "2" | "2" | "6" | "12">;
    skewY?: OrString<"0" | "1" | "2" | "2" | "6" | "12">;
}

function transform(value: any): Style
{
    if (value === true || value === "transform")
    {
        return {
            "--so-translate-x": 0,
            "--so-translate-y": 0,
            "--so-rotate": 0,
            "--so-skew-x": 0,
            "--so-skew-y": 0,
            "--so-scale-x": 1,
            "--so-scale-y": 1,
            transform: "translateX(var(--so-translate-x)) translateY(var(--so-translate-y)) rotate(var(--so-rotate)) skewX(var(--so-skew-x)) skewY(var(--so-skew-y)) scaleX(var(--so-scale-x)) scaleY(var(--so-scale-y))"
        };
    }
    else if (value === "gpu")
    {
        return {
            "--so-translate-x": 0,
            "--so-translate-y": 0,
            "--so-rotate": 0,
            "--so-skew-x": 0,
            "--so-skew-y": 0,
            "--so-scale-x": 1,
            "--so-scale-y": 1,
            transform: "translate3d(var(--so-translate-x), var(--so-translate-y), 0) rotate(var(--so-rotate)) skewX(var(--so-skew-x)) skewY(var(--so-skew-y)) scaleX(var(--so-scale-x)) scaleY(var(--so-scale-y))"
        };
    }

    return { transform: "none" };
}

export function transformOrigin(value: any)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = getDirection() ? "left" : "right";
        else if (value === "top-start")
        parsedValue = getDirection() ? "top left" : "top right";
    else if (value === "bottom-start")
        parsedValue = getDirection() ? "bottom left" : "bottom right";
    else if (value === "end")
        parsedValue = getDirection() ? "right" : "left";
    else if (value === "top-end")
        parsedValue = getDirection() ? "top right" : "top left";
    else if (value === "bottom-end")
        parsedValue = getDirection() ? "bottom right" : "bottom left";
    
    return css("transform-origin")(parsedValue)
}

export const TransformMapping: StyleProps = {
    transform: transform,
    transformOrigin: css("transform-origin"),
    scale: css(["--so-scale-x", "--so-scale-y"], "transform.scale"),
    scaleX: css("--so-scale-x", "transform.scale"),
    scaleY: css("--so-scale-y", "transform.scale"),
    rotate: css("--so-rotate", "transform.rotate"),
    skewX: css("--so-skew-x", "transform.scale"),
    skewY: css("--so-skew-y", "transform.scale"),
    translateX: css("--so-translate-x", "transform.translate"),
    translateY: css("--so-translate-y", "transform.translate"),
};