import { ComponentTheme, ParentComponent } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Badge";

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
