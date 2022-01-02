import { getDirection } from "../hooks/useDirection";
import { directionSpacing, spacing } from "./Spacing";
import { css, cssValueFn, StyleProps } from "./utils";

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
