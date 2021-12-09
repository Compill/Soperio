/** @jsx jsx */

import { jsx, SoperioComponent } from "@soperio/core";
import { IS_DEV } from "@soperio/utils";
import { sanitizeProps } from "../utils";
import React from "react";
import { getStyledConfig } from "../utils";
import config from "./config";
import { SelectConfig, SelectProps } from "./types";

/**
 *
 *
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((
    {
        size = "md",
        variant = "default",
        corners = "default",
        theme = "default",
        length,
        children,
        ...props
    }, ref) =>
{
    const styles: SelectConfig = getStyledConfig(theme, config, "Select");
    const sVariant = styles.variant?.[variant];
    const sSize = styles.size?.[size];
    const sCorners = styles.corners?.[corners];

    if (!sVariant && IS_DEV)
        console.log(`[Soperio Select Component]: variant ${variant} does not exist in your theme/config`);

    const disabledProps: SoperioComponent = { ...(sVariant && props.disabled && { ...sVariant.disabled, pointerEvents: "none" }) };

    return (
        <select
            {...sanitizeProps(sSize, "disabled")}
            {...sanitizeProps(sCorners, "disabled")}
            {...sanitizeProps(sVariant, "disabled")}
            {...(length ? { size: length} : null)}
            {...disabledProps}
            {...props}
            ref={ref}
        >
          {children}
        </select>
    );
});
