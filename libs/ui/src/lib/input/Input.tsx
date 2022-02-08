import { useColorTheme } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import defaultConfig from "./config";
import { InputProps } from "./types";

const COMPONENT_ID = "Soperio.Input";

Soperio.registerComponent(COMPONENT_ID, defaultConfig)

/**
 *
 *
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>((
    {
        size = "md",
        variant = "default",
        corners = "default",
        theme = "default",
        length,
        config,
        ...props
    }, ref) =>
{
    const firstRender = useFirstRender();
    const colorTheme = useColorTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config, { variant, size, corners }, props)

    return (
        <input
            transition={firstRender ? "none" : "all"}
            {...(length ? { size: length} : null)}
            {...styles}
            {...props}
            ref={ref}
        />
    );
});
