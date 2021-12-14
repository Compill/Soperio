import { css, cssValue, getThemeStyle, OrString, Style, StyleFn, StyleProp, StyleProps } from "./utils";

export interface Transitions
{
    transition?: true | false | "all" | "none" | "colors" | "opacity" | "shadow" | "transform",
    duration?: OrString<"75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000"> | number,
    easing?: OrString<"linear" | "in" | "out" | "in-out">,
    delay?: OrString<"75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000">,
    animate?: "none" | "spin" | "ping" | "pulse";
}

const defaultTransition = {
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transition-duration": "150ms"
};

function transition(value: any): Style
{
    const transitionProperty = getThemeStyle("transition.transitionProperty", value)!;

    return {
        "transition-property": transitionProperty,
        ...defaultTransition
    };
}

function duration(value: any)
{
    let parsedValue = getThemeStyle("transition.transitionProperty", value);

    if (parsedValue === undefined)
        parsedValue = `${value}ms`;

    return { "transition-duration": parsedValue };
}

export const TransitionsMapping: StyleProps =
{
    transition: transition,
    duration: duration,
    easing: css("transition-timing-function", "transition.ease"),
    delay: css("transition-delay", "transition.delay"),
    // animate: "animate", // TODO
};
