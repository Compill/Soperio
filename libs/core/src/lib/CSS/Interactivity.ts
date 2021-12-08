import { css, getStyleConfig, Style, StyleProps } from "./utils";

export interface Interactivity
{
    appearanceNone?: boolean,
    cursor?: "auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed",
    outline?: "none" | "white" | "black",
    pointerEvents?: "none" | "auto",
    resize?: true | "both" | "none" | "x" | "y";
    userSelect?: "none" | "text" | "all" | "auto";
}

function outline(value: any): Style
{
    const parsedValue = getStyleConfig("interactivity.outline", value)!;

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