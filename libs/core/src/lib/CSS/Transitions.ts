import { css as cssEmotion, keyframes } from "@emotion/react";
import { css, getThemeStyle, Style, StyleProps } from "./utils";

const defaultTransition =
{
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transition-duration": "150ms"
};

function transition(value: any): Style
{
    const transitionProperty = getThemeStyle("transition.transitionProperty", value === true ? "default" : value)!;

    return {
        "transition-property": transitionProperty,
        ...defaultTransition
    };
}

function duration(value: any)
{
    let parsedValue = getThemeStyle("transition.duration", value);

    if (parsedValue === undefined)
    {
      if (typeof value === "number")
        parsedValue = `${value}ms`;
      else
        parsedValue = value
    }

    return { "transition-duration": parsedValue };
}

function animate(value: any)
{
    if (value === "none")
        return { animation: "none" }

    const animation = getThemeStyle("transition.animation", value);

    const frames = keyframes(getThemeStyle("transition.keyframes", value))

    const emotion = cssEmotion`animation: ${frames} ${animation}`

    return {
        css: emotion
    }
}

export const TransitionsMapping: StyleProps =
{
    transition: transition,
    duration: duration,
    easing: css("transition-timing-function", "transition.ease"),
    delay: css("transition-delay", "transition.delay"),
    animate: animate,
};
