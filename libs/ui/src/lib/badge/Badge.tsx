/** @jsx jsx */

import React from "react";
import { jsx } from "@soperio/core";
import { BadgeConfig, BadgeProps } from "./types";
import { getStyledConfig } from "../utils";
import config from "./config";
import { IS_DEV } from "@soperio/utils";


/**
 *
 *
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
    variant = "default",
    size = "md",
    shape = "rounded",
    theme = "default",
    children,
    ...props
}: BadgeProps, ref) =>
{
    const styles: BadgeConfig = getStyledConfig(theme, config, "Badge");
    const sVariant = styles.variant?.[variant];
    const sSize = styles.size?.[size];
    const sShape = styles.shape?.[shape];

    if (!sVariant && IS_DEV)
        console.log(`[Soperio Badge Component]: variant ${variant} does not exist in your theme/config`);

    return (
        <span
            w="auto"
            verticalAlign="middle"
            {...sVariant}
            {...sSize}
            {...sShape}
            {...props}
            ref={ref}
        >
            {children}
        </span>
    );
});
