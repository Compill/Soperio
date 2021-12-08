import { Style, StyleProps } from "./utils";

export interface Accessibility
{
    srOnly?: boolean,
    notSrOnly?: boolean;
}

function screenReaderOnly(value: any): Style
{
    return {
        "position": "absolute",
        "width": "1px",
        "height": "1px",
        "padding": "0",
        "margin": "-1px",
        "overflow": "hidden",
        "clip": "rect(0, 0, 0, 0)",
        "white-space": "nowrap",
        "border-width": "0"
    };
}

function notScreenReaderOnly(value: any): Style
{
    return {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "padding": "0",
        "margin": "0",
        "overflow": "visible",
        "clip": "auto",
        "white-space": "normal"
    };
}

export const AccessibilityMapping: StyleProps =
{
    srOnly: screenReaderOnly,
    notSrOnly: notScreenReaderOnly
};