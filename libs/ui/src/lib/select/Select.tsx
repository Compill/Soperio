/** @jsx jsx */

import { jsx, SoperioComponent, useTheme } from "@soperio/core";
import { Soperio } from "../Soperio";
import { IS_DEV } from "@soperio/utils";
import { sanitizeProps } from "../utils";
import React from "react";
import { getStyledConfig } from "../utils";
import defaultConfig from "./config";
import { SelectConfig, SelectProps } from "./types";
import { useComponentConfig } from "../hooks/useComponentConfig";

const COMPONENT_ID = "Soperio.Select";

Soperio.registerComponent(COMPONENT_ID, defaultConfig);

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
    config,
    length,
    children,
    ...props
  }, ref) =>
{
  const colorTheme = useTheme(theme);

  const styles: SelectConfig = useComponentConfig(COMPONENT_ID, colorTheme, config);
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
      {...(length ? { size: length } : null)}
      {...disabledProps}
      {...props}
      ref={ref}
    >
      {children}
    </select>
  );
});
