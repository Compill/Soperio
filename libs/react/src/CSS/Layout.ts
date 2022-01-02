import { getDirection } from "../hooks/useDirection";
import { directionSpacing, spacing, SpacingScale } from "./Spacing";
import { css, cssValueFn, OrString, StyleProps } from "./utils";

export default interface Layout {
    boxDecorationBreak?: "slice" | "clone",
    boxSizing?: "border-box" | "content-box",
    block?: boolean,
    inline?: boolean,
    dflex?: boolean,
    display?: "block" | "contents" | "flow" | "flow-root" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "flex" | "grid"| "none" | "run-in" | "table"
    grid?: boolean,
    hidden?: boolean,
    float?: "start" | "end" | "none",
    clear?: "start" | "end" | "both" | "none",
    isolation?: true | "auto",
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down",
    objectPosition?: "bottom" | "center" | "start" | "start-bottom" | "start-top" | "end" | "end-bottom" | "end-top" | "top",
    overflow?: "auto" | "hidden" | "visible" | "scroll",
    overflowX?: "auto" | "hidden" | "visible" | "scroll",
    overflowY?: "auto" | "hidden" | "visible" | "scroll",
    overscroll?: "auto" | "hidden" | "visible" | "scroll",
    overscrollX?: "auto" | "hidden" | "visible" | "scroll",
    overscrollY?: "auto" | "hidden" | "visible" | "scroll",
    overscrollBehavior?: ""
    position?: "static" | "fixed" | "absolute" | "relative" | "sticky"
    top?: OrString<SpacingScale> | number,
    bottom?: OrString<SpacingScale> | number,
    start?: OrString<SpacingScale> | number,
    end?: OrString<SpacingScale> | number,
    inset?: OrString<SpacingScale> | number,
    insetX?: OrString<SpacingScale> | number,
    insetY?: OrString<SpacingScale> | number,
    visible?: boolean,
    invisible?: boolean,
    z?: OrString<"0" | "10" | "20" | "30" | "40" | "50" | "auto"> | number
}

function float(value: any)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = getDirection() ? "left" : "right";
    else if (value === "end")
        parsedValue = getDirection() ? "right" : "left";
    
    return css("float")(parsedValue)
}

function clear(value: any)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = getDirection() ? "left" : "right";
    else if (value === "end")
        parsedValue = getDirection() ? "right" : "left";
    
    return css("clear")(parsedValue)
}

function objectPosition(value: any)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = getDirection() ? "left" : "right";
        else if (value === "start-top")
        parsedValue = getDirection() ? "left top" : "right top";
    else if (value === "start-bottom")
        parsedValue = getDirection() ? "left bottom" : "right bottom";
    else if (value === "end")
        parsedValue = getDirection() ? "right" : "left";
    else if (value === "end-top")
        parsedValue = getDirection() ? "right top" : "left top";
    else if (value === "end-bottom")
        parsedValue = getDirection() ? "right bottom" : "left bottom";
    
    return css("object-position")(parsedValue)
}

export const LayoutMapping: StyleProps = {
    boxDecorationBreak: css("box-decoration-break"),
    boxSizing: css("border-box"),
    block: cssValueFn("display", "block"),
    dflex: cssValueFn("display", "flex"),
    display: css("display"),
    inline: cssValueFn("display", "inline"),
    grid: cssValueFn("display", "grid"),
    hidden: cssValueFn("display", "none"),
    float: float,
    clear: clear,
    isolation: css("isolation", undefined, "isolate"),
    objectFit: css("object-fit"),
    objectPosition: objectPosition,
    overflow: css("overflow"),
    overflowX: css("overflow-x"),
    overflowY: css("overflow-y"),
    overscrollX: css("overscroll-x"),
    overscrollY: css("overscroll-x"),
    overscrollBehavior: css("overscroll-behavior"),
    overscrollBehaviorX: css("overscroll-behavior-x"),
    overscrollBehaviorY: css("overscroll-behavior-y"),
    position: css("position"),
    top: spacing("top", "spacing.positiveNegative"),
    bottom: spacing("bottom", "spacing.positiveNegative"),
    start: directionSpacing("left", "direction", "spacing.positiveNegative"),
    end: directionSpacing("right", "left", "spacing.positiveNegative"),
    inset: css(["top", "bottom", "left", "right"], "spacing.positiveNegative"),
    insetX: css(["left", "right"], "spacing.positiveNegative"),
    insetY: css(["top", "bottom"], "spacing.positiveNegative"),
    visible: css("visible", "visible"),
    invisible: css("visible", "hidden"),
    z: css("z-index")
}