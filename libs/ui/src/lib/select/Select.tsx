import { ComponentTheme, ParentComponent } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { HTMLSelectProps } from "../HTMLTagProps";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Select";

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
