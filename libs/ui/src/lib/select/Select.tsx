import { ComponentManager, ComponentTheme, HTMLSelectProps, ParentComponent, useComponentConfig, useFirstRender } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";

import defaultConfig from "./config";

const COMPONENT_ID = "Soperio.Select";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface SelectProps extends ComponentProps, ParentComponent, Omit<HTMLSelectProps, "size">
{
  theme?: ComponentTheme,
  config?: ExtendConfig,
  length?: number;
}

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
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, corners }, props)

  return (
    <select
      transition={firstRender ? "none" : "all"}
      {...(length ? { size: length } : null)}
      {...styles}
      {...props}
      ref={ref}
    >
      {children}
    </select>
  );
});
