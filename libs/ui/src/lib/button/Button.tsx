import { ComponentTheme, ParentComponent } from "@soperio/core";
import React from 'react';
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { HTMLButtonProps } from "../HTMLTagProps";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Button"

// TODO This will disappear
// Soperio.registerComponent(COMPONENT_ID, defaultConfig)
// TO put the config in theme instead

export interface ButtonProps extends ComponentProps, ParentComponent, HTMLButtonProps
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}


/**
 *
 *
 */
// TODO Fix disabled style
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    size,
    variant,
    corners,
    theme = "default",
    config,
    selected = false,
    onMouseDown,
    onClick,
    ...props
}: ButtonProps, ref) =>
{
    const firstRender = useFirstRender();
    const preventFocus = React.useCallback((event) =>
    {
        event.preventDefault();
        onMouseDown && onMouseDown(event);
    }, [onMouseDown]);

    const looseFocus = React.useCallback((event) =>
    {
        (document.activeElement as HTMLElement).blur();
        onClick && onClick(event);
    }, [onClick]);

    const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, corners }, props)



    return (
        <button
            transition={firstRender ? "none" : "all"}
            hover_transition="all"
            easing="linear"
            duration="300"
            hover_duration="300"
            fontWeight="500"
            // focus_ringOffset="2"
            // focus_ringOffsetColor="blue-300"
            // focus_ringWidth="2"
            // focus_outline="none"
            {...styles}
            onMouseDown={preventFocus}
            onClick={looseFocus}
            {...props}
            ref={ref}
        >
            {props.children}
        </button >
    );
});

Button.displayName = "Soperio Button"
