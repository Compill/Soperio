/** @jsx jsx */

import { jsx, SoperioComponent } from "@soperio/core";
import { IS_DEV } from "@soperio/utils";
import { sanitizeProps } from "../utils";
import React from "react";
import { getStyledConfig } from "../utils";
import config from "./config";
import { InputConfig, InputProps } from "./types";

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
        ...props
    }, ref) =>
{
    const styles: InputConfig = getStyledConfig(theme, config, "Input");
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
