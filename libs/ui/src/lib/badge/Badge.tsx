import { useColorTheme } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import defaultConfig from "./config";
import { BadgeProps } from "./types";

const COMPONENT_ID = "Soperio.Badge";

Soperio.registerComponent(COMPONENT_ID, defaultConfig);

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

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, shape }, props);

  return (
    <span
      transition={firstRender ? "none" : "all"}
      w="auto"
      verticalAlign="middle"
      {...styles}
      {...props}
      ref={ref}
    >
      {children}
    </span>
  );
});
