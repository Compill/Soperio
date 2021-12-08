import { SpacingScale } from "./Spacing";
import { css, OrString, Style, StyleProps } from "./utils";

export type ScalingScale = "0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150";

export interface Transform
{
    transform?: true | "gpu" | "none",
    transformOrigin?: "center" | "top" | "top right" | "right" | "bottom right" | "bottom" | "bottom left" | "left" | "top left",
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