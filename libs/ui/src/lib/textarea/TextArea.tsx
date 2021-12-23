/** @jsx jsx */

import { jsx, SoperioComponent, useColorTheme } from "@soperio/core";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { IS_DEV } from "@soperio/utils";
import React from "react";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import { sanitizeProps } from "../utils";
import defaultConfig from "./config";
import { TextAreaProps } from "./types";

const COMPONENT_ID = "Soperio.TextArea";

Soperio.registerComponent(COMPONENT_ID, defaultConfig);

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
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();
  const colorTheme = useColorTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config);
  const sVariant = styles.variant?.[variant];
  const sSize = styles.size?.[size];
  const sCorners = styles.corners?.[corners];

  if (!sVariant && IS_DEV)
    console.log(`[Soperio TextArea Component]: variant ${variant} does not exist in your theme/config`);

  const disabledProps: SoperioComponent = { ...(sVariant && props.disabled && { ...sVariant.disabled, pointerEvents: "none" }) };

  return (
    <textarea
      transition={firstRender ? "none" : "all"}
      {...sanitizeProps(sSize, "disabled")}
      {...sanitizeProps(sCorners, "disabled")}
      {...sanitizeProps(sVariant, "disabled")}
      {...disabledProps}
      {...props}
      ref={ref}
    />
  );
});
