import { keyframes } from "@emotion/react";
import { Theme, getThemeStyle } from "@soperio/theming";
import { Style, StyleProps, css } from "./utils";

const defaultTransition =
{
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms"
};

function transition(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
    const transitionProperty = getThemeStyle(theme, "transition.transitionProperty", value === true ? "default" : value)!;

    return {
        transitionProperty: transitionProperty,
        ...defaultTransition
    };
}

function duration(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
    let parsedValue = getThemeStyle(theme, "transition.duration", value);

    if (parsedValue === undefined)
    {
      if (typeof value === "number")
        parsedValue = `${value}ms`;
      else
        parsedValue = value
    }

    return { transitionDuration: parsedValue };
}

function animate(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
    if (value === "none")
        return { animation: "none" }

    const animation = getThemeStyle(theme, "transition.animation", value);

    const frames = keyframes(getThemeStyle(theme, "transition.keyframes", value))

    return {
        css:
        {
          animation: `${frames} ${animation}`
        }
    }
}

export const TransitionsMapping: StyleProps =
{
    transition: transition,
    duration: duration,
    easing: css("transitionTimingFunction", "transition.ease"),
    delay: css("transitionDelay", "transition.delay"),
    animate: animate,
};
