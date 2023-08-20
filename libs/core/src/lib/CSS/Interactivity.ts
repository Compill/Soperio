import { css, StyleProps } from "./utils";

export const InteractivityMapping: StyleProps =
{
    appearanceNone: css("appearance", undefined, "none"),
    cursor: css("cursor"),
    pointerEvents: css("pointerEvents"),
    resize: css("resize", undefined, "both"),
    userSelect: css("userSelect")
};
