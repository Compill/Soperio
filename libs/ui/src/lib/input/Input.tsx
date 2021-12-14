/** @jsx jsx */

import { jsx, SoperioComponent, useTheme } from "@soperio/core";
import { IS_DEV } from "@soperio/utils";
import { sanitizeProps } from "../utils";
import React from "react";
import { getStyledConfig } from "../utils";
import defaultConfig from "./config";
import { InputConfig, InputProps } from "./types";
import { Soperio } from "../Soperio";
import { useComponentConfig } from "../hooks/useComponentConfig";

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
  const colorTheme = useTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config)
    const sVariant = styles.variant?.[variant];
    const sSize = styles.size?.[size];
    const sCorners = styles.corners?.[corners];

    if (!sVariant && IS_DEV)
        console.log(`[Soperio Input Component]: variant ${variant} does not exist in your theme/config`);

    const disabledProps: SoperioComponent = { ...(sVariant && props.disabled && { ...sVariant.disabled, pointerEvents: "none" }) };

    return (
        <input
            {...sanitizeProps(sSize, "disabled")}
            {...sanitizeProps(sCorners, "disabled")}
            {...sanitizeProps(sVariant, "disabled")}
            {...(length ? { size: length} : null)}
            {...disabledProps}
            {...props}
            ref={ref}
        />
    );
});
