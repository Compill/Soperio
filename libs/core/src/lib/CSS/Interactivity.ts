import { css, getThemeStyle, Style, StyleProps } from "./utils";

function outline(value: any): Style
{
    const parsedValue = getThemeStyle("interactivity.outline", value)!;

    return {
        "outline": parsedValue[0],
        "outline-offset": parsedValue[1],
    };
}

export const InteractivityMapping: StyleProps =
{
    appearanceNone: css("appearance", undefined, "none"),
    cursor: css("cursor"),
    outline: outline,
    pointerEvents: css("pointer-events"),
    resize: css("resize", undefined, "both"),
    userSelect: css("user-select")
};
