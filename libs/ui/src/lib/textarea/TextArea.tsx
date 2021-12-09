/** @jsx jsx */

import { jsx, SoperioComponent } from "@soperio/core";
import { IS_DEV } from "@soperio/utils";
import { sanitizeProps } from "../utils";
import React from "react";
import { getStyledConfig } from "../utils";
import config from "./config";
import { TextAreaConfig, TextAreaProps } from "./types";

/**
 *
 *
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((
    {
        size = "md",
        variant = "default",
        corners = "default",
        theme = "default",
        ...props
    }, ref) =>
{
    const styles: TextAreaConfig = getStyledConfig(theme, config, "TextArea");
    const sVariant = styles.variant?.[variant];
    const sSize = styles.size?.[size];
    const sCorners = styles.corners?.[corners];

    if (!sVariant && IS_DEV)
        console.log(`[Soperio TextArea Component]: variant ${variant} does not exist in your theme/config`);

    const disabledProps: SoperioComponent = { ...(sVariant && props.disabled && { ...sVariant.disabled, pointerEvents: "none" }) };

    return (
        <textarea
            {...sanitizeProps(sSize, "disabled")}
            {...sanitizeProps(sCorners, "disabled")}
            {...sanitizeProps(sVariant, "disabled")}
            {...disabledProps}
            {...props}
            ref={ref}
        />
    );
});
