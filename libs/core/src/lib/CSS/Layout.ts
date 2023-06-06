import { Theme } from "@soperio/theming";
import { directionSpacing, spacing } from "./Spacing";
import { css, cssValueFn, StyleProps } from "./utils";

function float(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = direction ? "left" : "right";
    else if (value === "end")
        parsedValue = direction ? "right" : "left";

    return css("float")(parsedValue, theme, direction, darkMode)
}

function clear(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = direction ? "left" : "right";
    else if (value === "end")
        parsedValue = direction ? "right" : "left";

    return css("clear")(parsedValue, theme, direction, darkMode)
}

function objectPosition(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
    let parsedValue = value;

    if (value === "start")
        parsedValue = direction ? "left" : "right";
        else if (value === "start-top")
        parsedValue = direction ? "left top" : "right top";
    else if (value === "start-bottom")
        parsedValue = direction ? "left bottom" : "right bottom";
    else if (value === "end")
        parsedValue = direction ? "right" : "left";
    else if (value === "end-top")
        parsedValue = direction ? "right top" : "left top";
    else if (value === "end-bottom")
        parsedValue = direction ? "right bottom" : "left bottom";

    return css("object-position")(parsedValue, theme, direction, darkMode)
}

export const LayoutMapping: StyleProps = {
    boxDecorationBreak: css("box-decoration-break"),
    boxSizing: css("box-sizing"),
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
    visible: css("visibility", undefined, "visible"),
    invisible: css("visibility", undefined, "hidden"),
    z: css("z-index")
}
