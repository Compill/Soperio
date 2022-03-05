import { Spacing } from "../CSSTypes";
import { OrString } from "@soperio/utils";

export default interface Layout {
  boxDecorationBreak?: false | "slice" | "clone",
  boxSizing?: false | "border-box" | "content-box",
    block?: boolean,
    inline?: boolean,
    dflex?: boolean,
  display?: false | "block" | "contents" | "flow" | "flow-root" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "flex" | "grid"| "none" | "run-in" | "table"
    grid?: boolean,
    hidden?: boolean,
  float?: false | "start" | "end" | "none",
  clear?: false | "start" | "end" | "both" | "none",
  isolation?: false | true | "auto",
  objectFit?: false | "contain" | "cover" | "fill" | "none" | "scale-down",
  objectPosition?: false | "bottom" | "center" | "start" | "start-bottom" | "start-top" | "end" | "end-bottom" | "end-top" | "top",
    overflow?: false | "auto" | "hidden" | "visible" | "scroll",
    overflowX?: false | "auto" | "hidden" | "visible" | "scroll",
    overflowY?: false | "auto" | "hidden" | "visible" | "scroll",
    overscroll?: false | "auto" | "hidden" | "visible" | "scroll",
    overscrollX?: false | "auto" | "hidden" | "visible" | "scroll",
    overscrollY?: false | "auto" | "hidden" | "visible" | "scroll",
  overscrollBehavior?: false | ""
    position?: false | "static" | "fixed" | "absolute" | "relative" | "sticky"
    top?: false | Spacing | number,
    bottom?: false | Spacing | number,
    start?: false | Spacing | number,
    end?: false | Spacing | number,
    inset?: false | Spacing | number,
    insetX?: false | Spacing | number,
    insetY?: false | Spacing | number,
    visible?: boolean,
    invisible?: boolean,
  z?: false | OrString<"0" | "10" | "20" | "30" | "40" | "50" | "auto"> | number
}
