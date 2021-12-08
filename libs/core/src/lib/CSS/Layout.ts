import { SpacingScale } from "./Spacing";
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
    float?: "left" | "right" | "none",
    clear?: "left" | "right" | "both" | "none",
    isolation?: true | "auto",
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down",
    objectPosition?: "bottom" | "center" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top",
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
    left?: OrString<SpacingScale> | number,
    right?: OrString<SpacingScale> | number,
    inset?: OrString<SpacingScale> | number,
    insetX?: OrString<SpacingScale> | number,
    insetY?: OrString<SpacingScale> | number,
    visible?: boolean,
    invisible?: boolean,
    z?: OrString<"0" | "10" | "20" | "30" | "40" | "50" | "auto"> | number

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
    float: css("float"),
    clear: css("clear"),
    isolation: css("isolation", undefined, "isolate"),
    objectFit: css("object-fit"),
    objectPosition: css("object-position"),
    overflow: css("overflow"),
    overflowX: css("overflow-x"),
    overflowY: css("overflow-y"),
    overscrollX: css("overscroll-x"),
    overscrollY: css("overscroll-x"),
    overscrollBehavior: css("overscroll-behavior"),
    overscrollBehaviorX: css("overscroll-behavior-x"),
    overscrollBehaviorY: css("overscroll-behavior-y"),
    position: css("position"),
    top: css("top", "spacing.positiveNegative"),
    bottom: css("bottom", "spacing.positiveNegative"), // TODO if typeof === "number", add "px"
    left: css("left", "spacing.positiveNegative"),
    right: css("right", "spacing.positiveNegative"),
    inset: css(["top", "bottom", "left", "right"], "spacing.positiveNegative"),
    insetX: css(["left", "right"], "spacing.positiveNegative"),
    insetY: css(["top", "bottom"], "spacing.positiveNegative"),
    visible: css("visible", "visible"),
    invisible: css("visible", "hidden"),
    z: css("z-index")
}