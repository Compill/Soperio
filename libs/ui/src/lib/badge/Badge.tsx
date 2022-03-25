import { ComponentManager, ComponentTheme, ParentComponent, useComponentConfig, useFirstRender } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config";

const COMPONENT_ID = "Soperio.Badge";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface BadgeProps extends ComponentProps, ParentComponent
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}

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
