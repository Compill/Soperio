/** @jsx jsx */

import { jsx } from "@soperio/react";
import { useColorTheme } from "@soperio/core";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { IS_DEV } from "@soperio/utils";
import React from "react";
import { Soperio } from "../Soperio";
import defaultConfig from "./config";
import { BadgeProps } from "./types";
import { useFirstRender } from "../hooks/useFirstRender";

const COMPONENT_ID = "Soperio.Badge";

Soperio.registerComponent(COMPONENT_ID, defaultConfig)

/**
 *
 *
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
    variant = "default",
    size = "md",
    shape = "rounded",
    theme = "default",
    config,
    children,
    ...props
}: BadgeProps, ref) =>
{
    const firstRender = useFirstRender();
    const colorTheme = useColorTheme(theme);

    const styles = useComponentConfig(COMPONENT_ID, colorTheme, config)
    const sVariant = styles.variant?.[variant];
    const sSize = styles.size?.[size];
    const sShape = styles.shape?.[shape];

    if (!sVariant && IS_DEV)
        console.log(`[Soperio Badge Component]: variant ${variant} does not exist in your theme/config`);

    return (
        <span
            transition={firstRender ? "none" : "all"}
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
