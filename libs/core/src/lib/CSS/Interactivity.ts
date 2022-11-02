import { css, StyleProps } from "./utils";

export const InteractivityMapping: StyleProps =
{
    appearanceNone: css("appearance", undefined, "none"),
    cursor: css("cursor"),
    pointerEvents: css("pointer-events"),
    resize: css("resize", undefined, "both"),
    userSelect: css("user-select")
};
